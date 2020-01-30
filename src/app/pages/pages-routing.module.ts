import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { StatisticsComponent } from './dashboard/statistics/statistics.component';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  }, {
    path: 'experience',
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  }, {
    path: 'view-profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }, {
    path: 'advance-options',
    loadChildren: () => import('./advance-options/advance-options.module').then(m => m.AdvanceOptionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
