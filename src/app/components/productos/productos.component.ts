import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent {
  @Input() productos: any[] = [];
  constructor(private _productosService: ProductosService,
    private router: Router
    ) {
    this.listar();
  }

  ngOnInit(): void {
  }

  listar(){
    this._productosService.getProductos()
      .subscribe((data: any) => {
        this.productos = data;
      });
  }

  verProducto(producto: any){
    this.router.navigate(['/detalle', producto.id]);
  }

  eliminarProducto(producto: any){
    if(confirm(`Está seguro que desea eliminar el Producto ${producto.name}?`)){
      this._productosService.eliminarProducto(producto.id).subscribe(response => {
        this.listar();
      });
    }
  }
}
