import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDuenoComponent } from './mostrar-dueno.component';

describe('MostrarDuenoComponent', () => {
  let component: MostrarDuenoComponent;
  let fixture: ComponentFixture<MostrarDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarDuenoComponent]
    });
    fixture = TestBed.createComponent(MostrarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
