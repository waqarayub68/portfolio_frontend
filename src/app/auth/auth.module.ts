import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [
    // BrowserAnimationsModule,
    CommonModule,
    AuthRoutingModule,
    NzCarouselModule
  ]
})
export class AuthModule { }
