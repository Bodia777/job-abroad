import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as AOS from 'aos';
import { Text } from 'src/app/interfaces/language.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public content: Text = this.languageService.contentContainer.ua;
  @ViewChild('picture', { static: false }) picture: ElementRef;
  private unsubscribed = new Subject();

  constructor( private renderer: Renderer2, private languageService: LanguageService) {}

  ngOnInit(): void {
    AOS.init();
    this.subscLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }

  private subscLanguage(): void {
    this.languageService.changeLanguage('ua');
    this.languageService.content$
    .pipe(takeUntil(this.unsubscribed))
    .subscribe((value: Text) => this.content = value);
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll($event): void {
      const pictureTop = 85 - 150 * globalThis.scrollY / globalThis.innerHeight;
      this.renderer.setStyle(this.picture.nativeElement, 'top', `${pictureTop}px`);
  }
}
