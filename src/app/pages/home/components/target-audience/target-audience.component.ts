import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { IAudience } from "./target-audience.interface";
import {Subject} from "rxjs";
import {LanguageService} from "../../../../services/language.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.scss']
})
export class TargetAudienceComponent implements OnInit, OnDestroy {

    @Output() public changeVacancy = new EventEmitter<string>();

    public content: IAudience;
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
            .subscribe(({ audienceText}) => this.content = audienceText);
    }

    public setVacancy (newVacansy) {
        this.changeVacancy.emit(newVacansy)
    }
}
