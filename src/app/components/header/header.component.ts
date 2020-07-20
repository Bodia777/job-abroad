import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { IHeaderText } from 'src/app/interfaces/language.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerText: IHeaderText;
  public selectedLanguage: string = 'UA';
  private unsubscribed = new Subject();

  @ViewChild('dropdown', { static: false }) dropdown: ElementRef;
  @ViewChild('li', { static: false }) dropdownItem: ElementRef;
  @ViewChild('li2', { static: false }) dropdownItem2: ElementRef;

  constructor(private renderer: Renderer2, private languageService: LanguageService) { }

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
        .subscribe(({ headerText }) => this.headerText = headerText);
    // this.languageService.changeLanguage();
  }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
