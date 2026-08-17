import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoRegistrado } from './vehiculo-registrado';

describe('VehiculoRegistrado', () => {
  let component: VehiculoRegistrado;
  let fixture: ComponentFixture<VehiculoRegistrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoRegistrado],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoRegistrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
