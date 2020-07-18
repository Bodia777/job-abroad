import { Component, OnInit } from '@angular/core';
import { Text } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public content: Text;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.subscLanguage();
  }

  private subscLanguage(): void {
    this.languageService.content.subscribe(value => this.content = value);
    this.languageService.changeLanguage();
}
}
