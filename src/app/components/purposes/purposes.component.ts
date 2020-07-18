import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBannerText } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-purposes',
  templateUrl: './purposes.component.html',
  styleUrls: ['./purposes.component.scss']
})
export class PurposesComponent implements OnInit, OnDestroy {
  public content: IBannerText | null;
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
    .subscribe(({ bannerText, goalsText }) => this.content = { bannerText, goalsText });
}
}
