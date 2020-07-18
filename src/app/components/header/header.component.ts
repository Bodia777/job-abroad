import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Text } from 'src/app/interfaces/language.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public content: Text;
  // public content: Observable<any> = this.languageService.content$;
  private unsubscribed = new Subject();

  @ViewChild('dropdown', { static: false }) dropdown: ElementRef;
  @ViewChild('li', { static: false }) dropdownItem: ElementRef;
  @ViewChild('li2', { static: false }) dropdownItem2: ElementRef;

  constructor(private renderer: Renderer2, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
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
    if (language){
      this.languageService.changeLanguage(language);
    }
    this.renderer.setStyle(this.dropdown.nativeElement, 'height', '0px');
    this.renderer.setStyle(this.dropdownItem.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.dropdownItem2.nativeElement, 'display', 'none');
  }


  private subscLanguage(): void {
    this.languageService.content$
    .pipe(takeUntil(this.unsubscribed))
    .subscribe(
      (value: Text) => {
        this.content = value;
      }
      );
}
}
