import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) {
  }

  getUrl() {
    return 'https://localhost:7294/api';
  }

  getProductos() {
    return this.http.get(`${this.getUrl()}/products`);
  }

  getProductoPorId(id: number) {
    return this.http.get(`${this.getUrl()}/products/${id}`);
  }

  eliminarProducto(id: number){
    return this.http.delete(`${this.getUrl()}/products?id=${id}`);
  }

}


