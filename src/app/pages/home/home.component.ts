import { Component, OnInit, AfterContentInit } from '@angular/core';
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
   public vacansyTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {}

    ngAfterContentInit(): void {
      const target = this.router.url.split('/')[1]
      target && this.scroll(target);
    }

    public scroll (target): void {
        const elementList = document.querySelector(target);
        const element = elementList && elementList as HTMLElement;
        element && setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
    }

    public changeVacancy (newVacancy: string): void {
      this.vacansyTitle = newVacancy;
      console.log(this.vacansyTitle, 'newVacancy<<<<<<,')
    }

    public getVacansy (): string {
        console.log(this.vacansyTitle, 'getV<<<<<<,')
      return this.vacansyTitle;
    }
}
