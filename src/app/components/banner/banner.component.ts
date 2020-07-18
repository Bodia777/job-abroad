import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as AOS from 'aos';
import { IBannerText } from "../../interfaces/language.interface";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public content: IBannerText;
  @ViewChild('picture', { static: false }) picture: ElementRef;

  constructor( private renderer: Renderer2, private languageService: LanguageService) {}

  ngOnInit(): void {
    AOS.init();
    this.subscLanguage();
  }

  private subscLanguage(): void {
      this.languageService.content.subscribe(({ bannerText, goalsText }) => {
          this.content = { bannerText, goalsText };
      });
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll($event): void {
      const pictureTop = 85 - 150 * globalThis.scrollY / globalThis.innerHeight;
      this.renderer.setStyle(this.picture.nativeElement, 'top', `${pictureTop}px`);
  }
}
