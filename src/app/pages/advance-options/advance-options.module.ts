import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CalendarModule } from 'angular-calendar';
import { AdvanceOptionsRoutingModule } from './advance-options-routing.module';
import { HeaderComponent } from './header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SchedulerComponent } from './appointments/scheduler/scheduler.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule } from '@angular/material';
import { NzCardModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HeaderComponent, SchedulerComponent, MapsComponent, FormsExampleComponent],
  imports: [
    CommonModule,
    AdvanceOptionsRoutingModule,
    // MatTabsModule
    NzTabsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbYQmofoGAA54J4oqCcFhBoMNL8-ncUmQ'
    }),
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NzCardModule
  ]
})
export class AdvanceOptionsModule { }
