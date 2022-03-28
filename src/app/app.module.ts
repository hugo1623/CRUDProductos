import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

// Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProductosService } from './services/productos.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearEditarComponent } from './components/crear-editar/crear-editar.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    CrearEditarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    APP_ROUTING
    ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
