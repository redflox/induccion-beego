import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = ""
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @ViewChild('myModal') modalRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showModal']) {
      this.onChange();
    }
  }

  onContainerClicked(event: MouseEvent): void {
    const modalContent = this.modalRef.nativeElement.querySelector('.modal-dialog');
    if (modalContent && !modalContent.contains(event.target)) {
      this.closeModal();
    }
  }

  closeModal() {
    if (this.showModal){
      this.closeModalEvent.emit(true);
    }
  }

  onChange() {
    const myModal = document.getElementById('myModal')
    if (myModal!= null) {
      if (this.showModal){
        myModal.style.display = 'block';
      }else{
        myModal.style.display = 'none';
      }
      
    }
  }
}
