import { Component, OnInit, inject, signal } from '@angular/core';
import { Leerapi } from '../../services/leerapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  // llamar servicio
  private servicio = inject(Leerapi);

  // guardamos
  vehiculos = signal<any[]>([]);

  // inicia todo
  ngOnInit(): void {
    this.servicio.getVehiculos().subscribe({
      next: (e) => {
        this.vehiculos.set(e); // agregamos el valor de e a vehiculos
        console.log('2.DATOS RECIBIDOS', e);
      },
      error: (err) => {
        console.error('Error al obtener vehículos:', err);
      },
    });
  }
}
