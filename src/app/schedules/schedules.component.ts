import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

  pickDate(e: any){
    this.date = e.date;
  }
}
