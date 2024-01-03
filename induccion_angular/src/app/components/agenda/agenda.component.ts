import { Component, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';
import { ModalComponent } from '../modal/modal.component';
import { FormularioCrearContactoComponent } from '../formulario-crear-contacto/formulario-crear-contacto.component';
import { FormularioEditarContactoComponent } from '../formulario-editar-contacto/formulario-editar-contacto.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [
    ContactoComponent, 
    ModalComponent, 
    FormularioCrearContactoComponent, 
    FormularioEditarContactoComponent
  ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  
  showModal: boolean = false;
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

  changeModal(){
    if (this.showModal){
      this.showModal = false;
    }else {
      this.showModal = true;
    }
  }

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainerRef!: ViewContainerRef;
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  // Método para abrir el modal con el componente de Crear Contacto
  nuevoContacto() {
    this.cargarComponente(FormularioCrearContactoComponent, "Crear Contacto");
    this.showModal = true;
  }

  // Método para abrir el modal con el componente de Editar Contacto
  editarContacto(id: number) {
    this.cargarComponente(FormularioEditarContactoComponent, "Editar Contacto",id);
    this.showModal = true;
  }

  // Método genérico para cargar un componente en el modal
  private cargarComponente(componente: any, title?: string,  id?: number) {
    this.modalContainerRef.clear();
    const componentRef = this.modalContainerRef.createComponent(componente);
    if(title){
      this.modalComponent.title = title;
    }
    if (id) {
      // Si el componente tiene una propiedad para establecer el ID, asígnalo aquí
      // componentRef.instance.id = id;
      
    }
  }

  eliminarContacto(id: number){
    this.contactos = this.contactos.filter(contacto => contacto.id!= id);
  }
}
