import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SchedulerComponent } from './appointments/scheduler/scheduler.component';


const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: HeaderComponent },
      // { path: 'job', component: SchedulerComponent },
      {
        path: 'job',
        // component: HeaderComponent,
        loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceOptionsRoutingModule { }
