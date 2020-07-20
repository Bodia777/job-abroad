import { Component, OnInit, OnDestroy } from '@angular/core';
import { Text } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalComponent } from '../modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit, OnDestroy {
  public content: Text | null;
  private unsubscribed = new Subject();
  modalRef: BsModalRef;

  constructor(public languageService: LanguageService, private modalservice: BsModalService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }

  public openModal(): void {
    this.modalRef = this.modalservice.show(ModalComponent, {
      initialState: {
        message: 'err.error.message',
        data: {}
      }
    });
  }

  private subscLanguage(): void {
    this.languageService.content$
    .pipe(takeUntil(this.unsubscribed))
    .subscribe((value: Text) => this.content = value);
}
}