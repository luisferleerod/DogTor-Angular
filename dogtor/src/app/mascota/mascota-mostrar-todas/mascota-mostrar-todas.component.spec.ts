import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaMostrarTodasComponent } from './mascota-mostrar-todas.component';

describe('MascotaMostrarTodasComponent', () => {
  let component: MascotaMostrarTodasComponent;
  let fixture: ComponentFixture<MascotaMostrarTodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaMostrarTodasComponent]
    });
    fixture = TestBed.createComponent(MascotaMostrarTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
