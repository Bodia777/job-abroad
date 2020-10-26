import { Component, OnInit, OnDestroy} from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Text } from 'src/app/interfaces/language.interface';
import { IHeaderText } from './header.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {GoogleAnaliticsService} from "../../services/google-analitics.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public headerText: IHeaderText;
  public selectedLanguage: string = 'UA';
  private unsubscribed = new Subject();

  constructor(private languageService: LanguageService, private googleAnaliticsService: GoogleAnaliticsService,
              protected router: Router) { }

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

  public scroll (target): void {
      if (target === 'contacts') {
          this.router.navigate([`/${target}`]);
      } else {
          const elementList = document.querySelector('#' + target);
          const element = elementList as HTMLElement;
          element && element.scrollIntoView({ behavior: 'smooth' });
      }
  }

  ngOnDestroy(): void {
      this.unsubscribed.next();
      this.unsubscribed.complete();
  }
}
