import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languageUkrainian = ['мова: UA', 'українська', 'російська', 'НАША МІСІЯ:', '“ПРОФЕСІЙНО, ВЧАСНО, НАДІЙНО:', 'ми знаємо - таке', 'працевлаштування закордоном', 'можливе разом з нами.“'];
  public languageRussian = ['язык: RU', 'украинский', 'русский'];

  constructor() { }
}
