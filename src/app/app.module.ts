import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RoutingModuleModule } from './app-routing.module';
import { ProductosComponentComponent } from './components/productos-component/productos-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    ProductosComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModuleModule,
    HttpClientModule,
    PaginationModule,
    NgxPaginationModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
