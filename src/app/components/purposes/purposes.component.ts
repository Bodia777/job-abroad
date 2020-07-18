import { Component, OnInit } from '@angular/core';
import { IBannerText } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-purposes',
  templateUrl: './purposes.component.html',
  styleUrls: ['./purposes.component.scss']
})
export class PurposesComponent implements OnInit {
  public content: IBannerText;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  private subscLanguage(): void {
      this.languageService.content.subscribe(({ bannerText, goalsText }) => {
          this.content = { bannerText, goalsText };
      });
  }
}
