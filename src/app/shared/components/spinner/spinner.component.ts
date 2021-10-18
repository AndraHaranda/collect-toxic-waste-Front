import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  //Propriedade para mostrar ou não o spinner de carregando
  @Input() showSpinner: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
