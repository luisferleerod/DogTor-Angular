import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioMostrarTodosComponent } from './veterinario-mostrar-todos.component';

describe('VeterinarioMostrarTodosComponent', () => {
  let component: VeterinarioMostrarTodosComponent;
  let fixture: ComponentFixture<VeterinarioMostrarTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioMostrarTodosComponent]
    });
    fixture = TestBed.createComponent(VeterinarioMostrarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
