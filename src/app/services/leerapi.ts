import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Leerapi {
    private http = inject(HttpClient);

  // la api que usamos
  private Api_Vehiculo = "/api-parcan/transparencia/vehiculos/?format=json"; // endpoint 

  // get Api
  getVehiculos(): Observable<any> {
    return this.http.get(this.Api_Vehiculo);
  }
}
