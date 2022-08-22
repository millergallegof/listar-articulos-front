import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceProductosService {
  constructor(
    private hhtpProductos: HttpClient
  ) { }

  listarProductos(): Observable<Product[]> {
    return this.hhtpProductos
      .get<Product[]>
      ('http://localhost:3000/products')
  }

}
