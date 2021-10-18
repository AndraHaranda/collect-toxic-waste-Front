import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Input() modalContent: string = '';

  @Output() toggleModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.toggleModal.emit(this.showModal)
  }
}
