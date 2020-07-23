import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { IHeaderText, Text } from 'src/app/interfaces/language.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public headerText: IHeaderText;
  public selectedLanguage = 'UA';
  private unsubscribed = new Subject();

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  public chooseLanguage(language): void {
      this.selectedLanguage = language.toUpperCase();
      this.languageService.changeLanguage(language);
  }

  private subscLanguage(): void {
    this.languageService.content$
        .pipe(takeUntil(this.unsubscribed))
        .subscribe((text: Text) => this.headerText = text.headerText);
  }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
