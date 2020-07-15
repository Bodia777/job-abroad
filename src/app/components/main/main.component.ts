import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public language = [];


  @ViewChild('dropdown', {static: false}) dropdown: ElementRef;
  @ViewChild('li', {static: false}) dropdownItem: ElementRef;
  @ViewChild('li2', {static: false}) dropdownItem2: ElementRef;


  constructor(private renderer: Renderer2, private languageService: LanguageService) { }

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
}
