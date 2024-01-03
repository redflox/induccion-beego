import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-editar-contacto',
  standalone: true,
  imports: [],
  templateUrl: './formulario-editar-contacto.component.html',
  styleUrl: './formulario-editar-contacto.component.css'
})
export class FormularioEditarContactoComponent {
  editContactData(NombreCompleto: string, NumeroDocumento: string, Direccion: string, PhoneNumber: string, Email: string) {
    console.log(NombreCompleto, NumeroDocumento, Direccion, PhoneNumber, Email)
  }
}
