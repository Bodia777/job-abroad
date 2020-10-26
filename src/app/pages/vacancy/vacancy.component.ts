import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {LanguageService} from "../../services/language.service";
import {IVacancy} from "./vacancy.interface";
import {Subject} from "rxjs";
import {Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-vacation',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit, OnDestroy {
  public content: IVacancy;
  private unsubscribed = new Subject();
  private index: number;

  constructor(private languageService: LanguageService, public router: Router) { }

    ngOnInit(): void {
        const url = this.router.url;
        this.index = Number(url.split('/')[2]);
        this.subscLanguage();
        this.scrollTop()
    }

    private subscLanguage(): void {
        this.languageService.content$
            .pipe(takeUntil(this.unsubscribed))
            .subscribe(({ vacancyText}) => this.content = vacancyText[this.index]);
    }

    public scrollTop() {
        window.scroll(0,0);
    }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }
}
