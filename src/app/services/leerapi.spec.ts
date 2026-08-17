import { TestBed } from '@angular/core/testing';

import { Leerapi } from './leerapi';

describe('Leerapi', () => {
  let service: Leerapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Leerapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
