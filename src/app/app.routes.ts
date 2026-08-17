import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { VehiculoRegistrado } from './pages/vehiculo-registrado/vehiculo-registrado';
import { Servicios } from './pages/servicios/servicios';

export const routes: Routes = [
     {path:"home",component: Home},
     {path:"contactos",component: Contacto},
     {path:"vehiculosRegistrado",component: VehiculoRegistrado},
    {path:"servicios",component: Servicios},

   
];
