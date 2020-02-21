import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
// import { StatisticsComponent } from './dashboard/statistics/statistics.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: MainNavComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: 'projects',
    component: MainNavComponent,
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  }, {
    path: 'experience',
    component: MainNavComponent,
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  }, {
    path: 'view-profile',
    component: MainNavComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }, {
    path: 'advance-options',
    component: MainNavComponent,
    loadChildren: () => import('./advance-options/advance-options.module').then(m => m.AdvanceOptionsModule)
  }, {
    path: 'documents',
    component: MainNavComponent,
    loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
