import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as AOS from 'aos';
import { Text } from 'src/app/interfaces/language.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public language: Text;


  @ViewChild('dropdown', {
    static: false
  }) dropdown: ElementRef;
  @ViewChild('li', {
    static: false
  }) dropdownItem: ElementRef;
  @ViewChild('li2', {
    static: false
  }) dropdownItem2: ElementRef;
  @ViewChild('picture', {
    static: false
  }) picture: ElementRef;


  constructor(private renderer: Renderer2, private languageService: LanguageService) {}

  ngOnInit(): void {
    AOS.init();
    this.language = this.languageService.languageUkrainian;
  }
  public openlngMenu(): void {
    if (this.dropdownItem2.nativeElement.style.display === 'none') {
      this.renderer.setStyle(this.dropdown.nativeElement, 'height', '40px');
      this.renderer.setStyle(this.dropdownItem.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.dropdownItem2.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.dropdown.nativeElement, 'height', '0px');
      this.renderer.setStyle(this.dropdownItem.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.dropdownItem2.nativeElement, 'display', 'none');
    }
  }
  public chooseLanguage(language): void {
    if (language === 'ua') {
      this.language = this.languageService.languageUkrainian;
    }
    if (language === 'ru') {
      this.language = this.languageService.languageRussian;
    }
    this.renderer.setStyle(this.dropdown.nativeElement, 'height', '0px');
    this.renderer.setStyle(this.dropdownItem.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.dropdownItem2.nativeElement, 'display', 'none');
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll($event): void {
    if (globalThis.scrollY > globalThis.innerHeight) {
      this.renderer.setStyle(this.picture.nativeElement, 'top', '85px');
      this.renderer.setAttribute(this.picture.nativeElement, 'src', '/assets/images/workersGroup.png');
    } else {
      const pictureTop = 85 - 150 * globalThis.scrollY / globalThis.innerHeight;
      this.renderer.setStyle(this.picture.nativeElement, 'top', `${pictureTop}px`);
      this.renderer.setAttribute(this.picture.nativeElement, 'src', '/assets/images/mainCity.jpg');
    }
  }
}
