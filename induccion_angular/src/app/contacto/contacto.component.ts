import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @Input() id: number = 0;
  @Input() nombre_completo = '';
  @Output() eliminarContactoEvent = new EventEmitter<number>();

  deleteContact(id: number){
    this.eliminarContactoEvent.emit(id);
  }
}
