import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Text } from 'src/app/interfaces/language.interface';

import {
    headOption, headerText, bannerText, goalsText, aboutUsText, partnersText, audienceText, modalText, footerText, privacyPolicy,
} from '../constants/index';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    selected: string;
    content$: BehaviorSubject<Text>

    constructor() {
        this.selected = localStorage.getItem('lng') || 'UA';
        this.content$ = new BehaviorSubject<Text>(this.contentContainer(this.selected.toLowerCase()));
    }

    public contentContainer = (selected) => {
        return {
            headOption: headOption[selected],
            headerText: headerText[selected],
            bannerText: bannerText[selected],
            goalsText: goalsText[selected],
            aboutUsText: aboutUsText[selected],
            partnersText: partnersText[selected],
            audienceText: audienceText[selected],
            modalText: modalText[selected],
            footerText: footerText[selected],
            privacyPolicy: privacyPolicy[selected],
        }
    };

    public changeLanguage(language): void {
        this.selected = language.toUpperCase()
        this.content$.next(this.contentContainer(this.selected.toLowerCase()));
        localStorage.setItem('lng', this.selected)
    }

    public getSelectedLanguage(): string {
        return this.selected;
    }
}
