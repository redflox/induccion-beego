import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-crear-contacto',
  standalone: true,
  imports: [],
  templateUrl: './formulario-crear-contacto.component.html',
  styleUrl: './formulario-crear-contacto.component.css'
})
export class FormularioCrearContactoComponent {

  createContactData(NombreCompleto: string, NumeroDocumento: string, Direccion: string, PhoneNumber: string, Email: string) {
    console.log(NombreCompleto, NumeroDocumento, Direccion, PhoneNumber, Email)
  }
  
}
