import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @Input() id: number = 0;
  @Input() nombre_completo = '';
  @Output() eliminarContactoEvent = new EventEmitter<number>();
  @Output() editarContactoEvent = new EventEmitter<number>();

  contactDelete(id: number){
    this.eliminarContactoEvent.emit(id);
  }

  contactEdit(){
    this.editarContactoEvent.emit(this.id);
  }
}
