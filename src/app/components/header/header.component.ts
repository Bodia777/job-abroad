import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
  @ViewChild('navbar', {static: false}) navbar: ElementRef;

  constructor(private languageService: LanguageService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  public chooseLanguage(language): void {
      this.selectedLanguage = language.toUpperCase();
      this.languageService.changeLanguage(language);
  }

  public togleMenu(): void {
    const value = getComputedStyle(this.navbar.nativeElement).getPropertyValue('display');
    if (value === 'none') {
      this.renderer.setStyle(this.navbar.nativeElement.previousElementSibling, 'backgroundColor', 'rgb(223, 219, 219)');
      this.renderer.setStyle(this.navbar.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.navbar.nativeElement.previousElementSibling, 'backgroundColor', 'rgb(255, 255, 255)');
      this.renderer.setStyle(this.navbar.nativeElement, 'display', 'none');
    }
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
