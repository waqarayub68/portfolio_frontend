import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NgZorroAntdModule, NzDropDownModule, NzDrawerModule } from 'ng-zorro-antd';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [MainNavComponent, PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgZorroAntdModule,
    LayoutModule,
    NzDropDownModule,
    NzDrawerModule,
  ]
})
export class PagesModule { }
