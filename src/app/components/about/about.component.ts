import { Component, OnInit } from '@angular/core';
import { IAboutUsText } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutUsText: IAboutUsText;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  private subscLanguage(): void {
    this.languageService.content.subscribe(({ aboutUsText }) => {
        this.aboutUsText = aboutUsText
    });
    this.languageService.changeLanguage();
}
}
