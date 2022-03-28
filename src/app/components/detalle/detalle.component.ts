import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  producto: any = {};
  
  constructor(private router: ActivatedRoute, private productosService: ProductosService) {
    router.params.subscribe(params => {
      this.obtenerProductoPorId(params['id']);
    });

  }

  ngOnInit(): void {
  }

  obtenerProductoPorId(id: number){
    this.productosService.getProductoPorId(id).subscribe(data => {
      this.producto = data;
    });
  }

}
