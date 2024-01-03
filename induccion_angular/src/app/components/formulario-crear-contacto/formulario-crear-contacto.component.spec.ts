import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearContactoComponent } from './formulario-crear-contacto.component';

describe('FormularioCrearContactoComponent', () => {
  let component: FormularioCrearContactoComponent;
  let fixture: ComponentFixture<FormularioCrearContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCrearContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCrearContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
