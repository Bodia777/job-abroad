import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAboutUsText } from './about.interface';
import { LanguageService } from 'src/app/services/language.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {IServiceModal} from "../service-modal/services-modal.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
    private freeServiceModal: IServiceModal;
    private additionServiceModal: IServiceModal;
    private unsubscribed = new Subject();
    public  aboutUsText: IAboutUsText | null;
    public selectedContent: IServiceModal;
    public servicesBtns: string[];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  private subscLanguage(): void {
    this.languageService.content$
    .pipe(takeUntil(this.unsubscribed))
    .subscribe(({ aboutUsText, freeServiceModal, additionServiceModal }) =>  {
        this.aboutUsText = aboutUsText
        this.freeServiceModal = freeServiceModal;
        this.additionServiceModal = additionServiceModal;
        this.servicesBtns = [freeServiceModal.title, additionServiceModal.title]
    });
  }

  public selectServiceModal (content): void {
      this.selectedContent = this[content];
  }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
