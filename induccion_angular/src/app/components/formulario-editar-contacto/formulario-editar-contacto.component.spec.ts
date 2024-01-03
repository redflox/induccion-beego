import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarContactoComponent } from './formulario-editar-contacto.component';

describe('FormularioEditarContactoComponent', () => {
  let component: FormularioEditarContactoComponent;
  let fixture: ComponentFixture<FormularioEditarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEditarContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEditarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
