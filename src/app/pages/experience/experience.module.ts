import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { NzGridModule, NzCardModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [JobsListingComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    NzGridModule,
    NzCardModule
  ]
})
export class ExperienceModule { }
