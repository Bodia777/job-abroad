import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { IBannerText } from 'src/app/interfaces/language.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  public content: IBannerText;
  private unsubscribed = new Subject();

  constructor( private languageService: LanguageService) {}

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
          .subscribe(({ bannerText}) => this.content = bannerText);
  }
}
