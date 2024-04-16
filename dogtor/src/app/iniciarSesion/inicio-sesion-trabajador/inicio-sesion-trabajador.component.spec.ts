import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionTrabajadorComponent } from './inicio-sesion-trabajador.component';

describe('InicioSesionTrabajadorComponent', () => {
  let component: InicioSesionTrabajadorComponent;
  let fixture: ComponentFixture<InicioSesionTrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionTrabajadorComponent]
    });
    fixture = TestBed.createComponent(InicioSesionTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
