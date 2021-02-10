import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './menu/account/account.component';
import { UserScheduleComponent } from './menu/user-schedule/user-schedule.component';

const routes: Routes = [
  {
    path:'account',
    component: AccountComponent
  },
  {
    path:'userSchedule',
    component: UserScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
