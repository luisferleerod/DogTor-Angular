import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMostrarTodosComponent } from './cliente-mostrar-todos.component';

describe('ClienteMostrarTodosComponent', () => {
  let component: ClienteMostrarTodosComponent;
  let fixture: ComponentFixture<ClienteMostrarTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMostrarTodosComponent]
    });
    fixture = TestBed.createComponent(ClienteMostrarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
