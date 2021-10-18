import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from 'src/app/shared/nav/nav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NavComponent,
    SpinnerComponent,
    ModalComponent
  ],
  providers: [],
})
export class SharedModule { }
