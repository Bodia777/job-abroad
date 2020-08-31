import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { IHeaderText, Text } from 'src/app/interfaces/language.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {GoogleAnaliticsService} from "../../services/google-analitics.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public headerText: IHeaderText;
  public selectedLanguage: string = 'UA';
  private unsubscribed = new Subject();

  constructor(private languageService: LanguageService, private googleAnaliticsService: GoogleAnaliticsService) { }

  ngOnInit(): void {
    this.subscLanguage();
    this.getLanguage();
  }

  public chooseLanguage(language): void {
      this.selectedLanguage = language.toUpperCase();
      this.languageService.changeLanguage(language);
      this.googleAnaliticsService
          .eventEmitter('select-language', language, 'click');
  }

  private subscLanguage(): void {
    this.languageService.content$
        .pipe(takeUntil(this.unsubscribed))
        .subscribe((text: Text) => this.headerText = text.headerText);
  }

  private getLanguage(): void {
      this.selectedLanguage = this.languageService.getSelectedLanguage();
  }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
