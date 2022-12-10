import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  //Controla o spinner de carregando.
  // True = Aparece,  false = Não aparece
  showSpinner: boolean = false;

  showModal: boolean = false;
  modalContent: string = '';

  constructor(private fb: FormBuilder, private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      nome:[''],
      senha:['']
    })
  }

  login(){
    this.showSpinner = true;
    setTimeout(() => {

      this.router.navigate(['principal'])
    }, 1000);
    return
    let nome = this.formLogin.value.nome
    let senha = this.formLogin.value.senha

    // Realiza o Login, caso exista um usuário cadastrado no banco de dados.
    this.commonService.login({ email: nome, password: senha}).subscribe((dados_Login)=>{

      // Caso o login seja efeituado com sucesso retorna o usuário logado, e um Token.
      let token = dados_Login['token']
      let usuarioLogado =  dados_Login['user']

      //Armazenando o Token na session storage, para utilizarmos ele futuramente, pra novas chamadas.
      sessionStorage.setItem('Token', token['token'])
      //Armazenando o nome do usuário logado na session storage.
      sessionStorage.setItem('usuarioLogado', usuarioLogado['name'])

      //Espera 1 segundo para redirecionar para a proxima página
      setTimeout(() => {

        this.router.navigate(['principal'])
      }, 2000);

      //Caso ocorra algum erro vai verificar o tipo de erro e retornar uma mensagem.
    }, error =>{

      this.modalContent = this.commonService.searchError(error);
      this.showModalMessage(this.modalContent)
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
