import { Component } from '@angular/core';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  show = true;

  chevron = faChevronLeft;

  title = 'SharedScheduleApp';
  
  sideShow(){
    if (this.show) {
      this.show = false;
      this.chevron = faChevronRight;
    } else {
      this.show = true;
      this.chevron = faChevronLeft;
    }
  }
}













