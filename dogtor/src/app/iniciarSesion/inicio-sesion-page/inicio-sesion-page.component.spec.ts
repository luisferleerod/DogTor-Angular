import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionPageComponent } from './inicio-sesion-page.component';

describe('InicioSesionPageComponent', () => {
  let component: InicioSesionPageComponent;
  let fixture: ComponentFixture<InicioSesionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionPageComponent]
    });
    fixture = TestBed.createComponent(InicioSesionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
