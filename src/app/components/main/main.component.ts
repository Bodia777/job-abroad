import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as AOS from 'aos';
import { Text } from 'src/app/interfaces/language.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public content: Text;
  @ViewChild('picture', { static: false }) picture: ElementRef;

  constructor( private renderer: Renderer2, private languageService: LanguageService) {}

  ngOnInit(): void {
    AOS.init();
    this.subscLanguage();
  }

  private subscLanguage(): void {
      this.languageService.content.subscribe(value => this.content = value);
      this.languageService.changeLanguage();
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll($event): void {
      const pictureTop = 85 - 150 * globalThis.scrollY / globalThis.innerHeight;
      this.renderer.setStyle(this.picture.nativeElement, 'top', `${pictureTop}px`);
  }
}
