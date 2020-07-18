import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { IHeaderText } from 'src/app/interfaces/language.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerText: IHeaderText;
  public selectedLanguage: string = 'UA';

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
    this.languageService.content.subscribe(({ headerText }) => {
        this.headerText = headerText;
    });
    this.languageService.changeLanguage();
  }
}
