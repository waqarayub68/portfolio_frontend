import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDocumentsComponent } from './personal-documents/personal-documents.component';


const routes: Routes = [
  { path: '',
  children: [
    { path: '', component: PersonalDocumentsComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
