import { Component, Input, OnInit} from '@angular/core';
import {IServiceModal} from "./services-modal.interface";

@Component({
  selector: 'app-free-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
    @Input() content: IServiceModal;

    constructor() { }

    ngOnInit(): void {}
}
