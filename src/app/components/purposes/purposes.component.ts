import { Component, OnInit } from '@angular/core';
import { Text } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-purposes',
  templateUrl: './purposes.component.html',
  styleUrls: ['./purposes.component.scss']
})
export class PurposesComponent implements OnInit {
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
