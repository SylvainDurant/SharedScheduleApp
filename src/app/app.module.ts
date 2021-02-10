import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/shared.module';

///// Components /////
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './menu/account/account.component';
import { UserScheduleComponent } from './menu/user-schedule/user-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountComponent,
    UserScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
