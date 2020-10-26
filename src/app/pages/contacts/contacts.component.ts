import { Component, OnInit, OnDestroy } from '@angular/core';
import {IContacts} from "./contacts.interface";
import {Subject} from "rxjs";
import {LanguageService} from "../../services/language.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit, OnDestroy {

    public content: IContacts;
    private unsubscribed = new Subject();

    constructor(private languageService: LanguageService) { }

    ngOnInit(): void {
        this.subscLanguage();
        this.scrollTop()
    }

    private subscLanguage(): void {
        this.languageService.content$
            .pipe(takeUntil(this.unsubscribed))
            .subscribe(({ contactText}) => {
                this.content = contactText
            });
    }

    public scrollTop() {
        window.scroll(0,0);
    }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
