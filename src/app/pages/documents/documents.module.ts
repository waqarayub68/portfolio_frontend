import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { PersonalDocumentsComponent } from './personal-documents/personal-documents.component';


@NgModule({
  declarations: [PersonalDocumentsComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
