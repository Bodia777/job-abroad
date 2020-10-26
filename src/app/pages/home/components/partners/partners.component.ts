import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPartners} from "./partners.interface";
import {Subject} from "rxjs";
import {LanguageService} from "../../../../services/language.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, OnDestroy {

    public content: IPartners;
    private unsubscribed = new Subject();

    constructor( private languageService: LanguageService) {}

    ngOnInit(): void {
        this.subscLanguage();
    }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }

    private subscLanguage(): void {
        this.languageService.content$
            .pipe(takeUntil(this.unsubscribed))
            .subscribe(({ partnersText}) => this.content = partnersText);
    }
}
