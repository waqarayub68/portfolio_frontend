import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListingComponent } from './listing/listing.component';
import { NzGridModule, NzCardModule } from 'ng-zorro-antd';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NzGridModule,
    // NzTableModule,
    NzCardModule,
    NzCollapseModule
  ]
})
export class ProjectsModule { }
