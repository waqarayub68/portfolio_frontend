import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NzCardModule, NzGridModule, NzTableModule, NzIconModule } from 'ng-zorro-antd';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    ScrollingModule,
    NgxChartsModule,
    NzGridModule,
    NzTableModule,
    NzIconModule
  ]
})
export class DashboardModule { }
