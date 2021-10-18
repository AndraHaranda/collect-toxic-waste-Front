import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  form_cadastro: FormGroup;

  showSpinner: boolean = false;

  showModal: boolean = false;
  modalContent: string = '';

  constructor(private fb: FormBuilder, private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.form_cadastro = this.fb.group({
      nome:[''],
      email:[''],
      senha:['']
    })
  }

  cadastrar(){

    this.showSpinner = true;

    let nome = this.form_cadastro.value.nome
    let email = this.form_cadastro.value.email
    let senha = this.form_cadastro.value.senha
    let token = sessionStorage.getItem('Token');

    let in_body ={
      name: nome,
      email: email,
      password: senha,
      token: token
    }

    this.commonService.cadastrarUsuario(in_body).subscribe(()=>{

      this.router.navigate(['principal'])
    }, error =>{

      this.modalContent = this.commonService.searchError(error);
      this.showModalMessage(this.modalContent);
    })
  }

  fechaModal(){
    this.showModal = !this.showModal;
  }

  showModalMessage(mensagem){
    this.showSpinner = false;
    this.showModal = true;
    this.modalContent = mensagem;
  }
}
