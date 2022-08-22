import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductosComponentComponent } from './components/productos-component/productos-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'productos', component: ProductosComponentComponent },
  { path: 'about', component: AboutComponentComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModuleModule { }
