import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HeaderComponent } from '../header/header.component';


const routes: Routes = [
  { path: '',
  // component:HeaderComponent,
    children: [
      { path: '', component: SchedulerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
