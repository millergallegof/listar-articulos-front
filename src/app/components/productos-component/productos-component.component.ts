import { Component, OnInit } from '@angular/core';
import { HttpServiceProductosService } from 'src/app/http-service-productos.service';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent implements OnInit {
  productsList?: Product[];
  pagina: number = 1;

  constructor(
    private servicioHttpProducts: HttpServiceProductosService
  ) { }

  ngOnInit(): void {
    this.listarProducts()
  }

  listarProducts(): void {
    this.servicioHttpProducts.listarProductos().subscribe(products => {
      this.productsList = products
    })
  }

  buyProduct(): void {
    Swal.fire({
      title: 'GRACIAS POR LA COMPRA',
      width: 300,
      padding: '3em',
      color: 'azure',
      confirmButtonColor: 'black',
      background: 'url(../../../assets/img/comprado.gif)',
      allowOutsideClick: false,
    })
  }

}
