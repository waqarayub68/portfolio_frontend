import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';


const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: JobsListingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
