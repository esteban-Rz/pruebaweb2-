import { Component } from '@angular/core';
import { FormularioRegistro } from '../../components/formulario-registro/formulario-registro';

@Component({
  selector: 'app-vehiculo-registrado',
  imports: [FormularioRegistro],
  templateUrl: './vehiculo-registrado.html',
  styleUrl: './vehiculo-registrado.css',
})
export class VehiculoRegistrado {}
