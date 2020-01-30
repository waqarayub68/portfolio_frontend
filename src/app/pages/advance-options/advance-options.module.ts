import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceOptionsRoutingModule } from './advance-options-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AdvanceOptionsRoutingModule
  ]
})
export class AdvanceOptionsModule { }
