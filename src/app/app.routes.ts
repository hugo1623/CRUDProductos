import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearEditarComponent } from './components/crear-editar/crear-editar.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const APP_ROUTES: Routes = [ 
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'crear', component: CrearEditarComponent },
    { path: 'editar/:id', component: CrearEditarComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});