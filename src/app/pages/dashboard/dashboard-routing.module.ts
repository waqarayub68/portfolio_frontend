import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { NzCardModule, NzGridModule, NzTableModule, NzIconModule } from 'ng-zorro-antd';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: StatisticsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NzCardModule,
    ScrollingModule,
    NgxChartsModule,
    NzGridModule,
    NzTableModule,
    NzIconModule
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
