import { Component } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {


  contactos = [{
    id : 1,
    nombre_completo: 'Felipe Molina',
    numero_documento: 1018488959,
    direccion: 'Calle falsa 123',
    telefono: [ 3135468471, 3204567812 ],
    correo: ['swsbmm@gmail.com', 'bfmunozm@udisitrital.edu.co']
  },
  {
    id : 2,
    nombre_completo: 'Bryan Muñoz',
    numero_documento: 1018505738,
    direccion: 'Cr 13 #23 - 16',
    telefono: [ 3131234578, 3209876214 ],
    correo: ['ibryandesing85@gmail.com', 'contact@redflox.com']
  },
  {
    id : 3,
    nombre_completo: 'Javier Murillo',
    numero_documento: 1018123654,
    direccion: 'Calle 54 # 12 - 17',
    telefono: [ 3139875241, 3202549678 ],
    correo: ['javmu@gmail.com', 'llojavi@yahoo.es']
  }]

  createContact(){
    this.contactos.push({
      id : this.contactos.length + 1,
      nombre_completo: 'Bryan',
      numero_documento: 1018488959,
      direccion: 'Calle falsa 123',
      telefono: [ 3135468471, 3204567812 ],
      correo: ['swsbmm@gmail.com', 'bfmunozm@udisitrital.edu.co']
    })
  }

  deleteContact(id: number){
    this.contactos = this.contactos.filter(contacto => contacto.id!= id);
  }
}
