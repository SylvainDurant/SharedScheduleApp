import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';

///// Calendar /////
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

///// Components /////
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './menu/account/account.component';
import { UserScheduleComponent } from './menu/user-schedule/user-schedule.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { TestComponent } from './menu/test/test.component';
import { MessagesComponent } from './menu/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountComponent,
    UserScheduleComponent,
    SchedulesComponent,
    ScheduleComponent,
    TestComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
