import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import * as AOS from 'aos';
import {distinctUntilChanged, filter, takeUntil} from "rxjs/operators";
import {GoogleAnaliticsService} from "./services/google-analitics.service";
import {Text} from "./interfaces/language.interface";
import {IHeadOption} from "./interfaces/head.interface";
import {Title, Meta} from "@angular/platform-browser";
import { DOCUMENT } from '@angular/common';
import {LanguageService} from "./services/language.service";
import {Subject} from "rxjs";

declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
    public title = 'Pro Work Agency';
    private unsubscribed = new Subject();

    public constructor(public router: Router, private googleAnaliticsService: GoogleAnaliticsService, private languageService: LanguageService,
                       private titleService: Title, private meta: Meta, @Inject(DOCUMENT) private document: Document) {
        this.router.events
            // @ts-ignore
            .pipe(filter(({urlAfterRedirects}) => urlAfterRedirects))
            // @ts-ignore
            .pipe(distinctUntilChanged((prev, curr) => prev.urlAfterRedirects === curr.urlAfterRedirects))
            .subscribe(event => {
                    if (event instanceof NavigationEnd) gtag('config', 'UA-176290346-1', {'page_path': event.urlAfterRedirects});
                });
    }

    ngOnInit() {
        AOS.init();
        this.getUserAgent();
        this.subscLanguage();
    }

    private getUserAgent() {
        const userAgentString = window.navigator.userAgent;
        this.googleAnaliticsService
            .eventEmitter('user-agent', userAgentString, 'init');
    }

    private subscLanguage(): void {
        this.languageService.content$
            .pipe(takeUntil(this.unsubscribed))
            .subscribe((text: Text) => {
                const { headOption } = text;
                this.setHeadOptions(headOption);
            });
    }

    private setHeadOptions(headOption: IHeadOption): void{
        this.titleService.setTitle( headOption.title );
        this.meta.updateTag({ name: 'description', content: headOption.description });
        this.document.documentElement.lang = headOption.languageOption;
    }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
