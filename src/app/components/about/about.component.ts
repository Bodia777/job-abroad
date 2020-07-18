import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAboutUsText } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public  aboutUsText: IAboutUsText | null;
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
    .subscribe(({ aboutUsText }) => this.aboutUsText = aboutUsText);
}
}
