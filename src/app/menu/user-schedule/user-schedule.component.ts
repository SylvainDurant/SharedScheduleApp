import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.scss']
})
export class UserScheduleComponent implements OnInit {

  iconCalendar = faCalendarAlt;
  iconDelete = faTimes;
  iconEdit = faEdit;

  events = [
    {name: "an event", start: 18022021, calendar: "Hymiée"},
    {name: "Hymiée", start: 18022021, end: 21022021, calendar: "Hymiée"},
    {name: "Ferrière", start: 26022021, end: 28022021, calendar: "Ferrière"}
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
