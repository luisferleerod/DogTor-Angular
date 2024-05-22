import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioMostrarClienteComponent } from './veterinario-mostrar-cliente.component';

describe('VeterinarioMostrarClienteComponent', () => {
  let component: VeterinarioMostrarClienteComponent;
  let fixture: ComponentFixture<VeterinarioMostrarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioMostrarClienteComponent]
    });
    fixture = TestBed.createComponent(VeterinarioMostrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
