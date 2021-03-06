import { Component, OnInit, OnDestroy } from '@angular/core';
import { IFooter } from './footer.interface';
import { LanguageService } from 'src/app/services/language.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit, OnDestroy {
  public content: IFooter;
  private unsubscribed = new Subject();

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }

  private subscLanguage(): void {
    this.languageService.content$
    .pipe(takeUntil(this.unsubscribed))
    .subscribe(({ footerText }) => this.content = footerText);
  }
}
