import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  @Input( ) date:any;

  constructor() { }

  ngOnInit(): void {
  }

}
