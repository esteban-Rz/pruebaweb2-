import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormularioRegistro {
   private fb = inject(FormBuilder);

  // Fecha mínima seleccionable: hoy (no se pueden agendar citas en el pasado)
  hoy = new Date().toISOString().split('T')[0];

  citaForm: FormGroup = this.fb.group({
    // Datos del cliente
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,10}$/)]],
    email: ['', [Validators.required, Validators.email]],

    // Datos del vehículo
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    anio: ['', [Validators.required, Validators.min(1980), Validators.max(new Date().getFullYear() + 1)]],
    placa: ['', [Validators.required, Validators.minLength(5)]],

    // Servicio solicitado
    servicio: ['', Validators.required],

    // Fecha y hora de la cita
    fecha: ['', Validators.required],
    hora: ['', Validators.required],

    // Observaciones opcionales
    descripcion: ['', Validators.maxLength(300)],
  });

  // Lista de servicios disponibles (fácil de extender a futuro)
  servicios = [
    { valor: 'mantenimiento', etiqueta: 'Mantenimiento' },
    { valor: 'diagnostico', etiqueta: 'Diagnóstico' },
    { valor: 'reparacion', etiqueta: 'Reparación' },
  ];

  onSubmit(): void {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched(); // muestra los errores de todos los campos
      return;
    }

    console.log('Cita agendada:', this.citaForm.value);
    alert('¡Tu cita fue agendada correctamente!');
    this.citaForm.reset();
  }

  // Getter de conveniencia para acceder más fácil a los controles desde el HTML
  get f() {
    return this.citaForm.controls;
  }
}
