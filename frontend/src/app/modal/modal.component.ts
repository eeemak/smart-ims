import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
  }

}
