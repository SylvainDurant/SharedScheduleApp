import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarView, CalendarEvent} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit{
  title = 'angular-calendar-example';
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  @Output() onDate = new EventEmitter();

  events: CalendarEvent[] = [
    {
      start: (new Date()),
      title: 'An event with no end date',
    },
    {
      start: (new Date()),
      end: (new Date(2021, 1, 20)),
      color: colors.red,
      title: 'Second event',
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
    
  }  
  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    // console.log(date);
    // console.log(events);
    this.onDate.emit({date, events});

  }

}