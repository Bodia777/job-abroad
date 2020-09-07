import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Text } from 'src/app/interfaces/language.interface';

import {
    headOption, headerText, bannerText, goalsText, aboutUsText, partnersText, audienceText, modalText, footerText,
} from '../constants/index';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    selected: string;
    content$: BehaviorSubject<Text>

    constructor() {
        this.selected = localStorage.getItem('lng') || 'UA';
        this.content$ = new BehaviorSubject<Text>(this.contentContainer[this.selected.toUpperCase()]);
    }

    public contentContainer = {
        UA: {
            headOption: headOption.ua,
            headerText: headerText.ua,
            bannerText: bannerText.ua,
            goalsText: goalsText.ua,
            aboutUsText: aboutUsText.ua,
            partnersText: partnersText.ua,
            audienceText: audienceText.ua,
            modalText: modalText.ua,
            footerText: footerText.ua
        },
        RU: {
            headOption: headOption.ru,
            headerText: headerText.ru,
            bannerText: bannerText.ru,
            goalsText: goalsText.ru,
            aboutUsText: aboutUsText.ru,
            partnersText: partnersText.ru,
            audienceText: audienceText.ru,
            modalText: modalText.ru,
            footerText: footerText.ru,
        }
    };

    public changeLanguage(language): void {
        this.selected = language.toUpperCase()
        this.content$.next(this.contentContainer[this.selected]);
        localStorage.setItem('lng', this.selected)
    }

    public getSelectedLanguage(): string {
        return this.selected;
    }
}
