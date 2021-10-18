import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() rota_mapa: boolean = false;
  @Input() rota_cadastro: boolean = false;
  usuarioLogado: string = ''
  constructor(private router: Router) { }

  ngOnInit() {
    //Define o nome do usuário logado.
    this.usuarioLogado = this.buscaUsuarioLogado();
  }

  buscaUsuarioLogado(){
    // Verifica se existe um usuário logado armazenado na sessionstorage
    return sessionStorage.getItem('usuarioLogado');
  }

  logout(){
    // limpa a session storage, removendo o usuário e token.
    sessionStorage.clear();
    // Navega para a tela de login
    this.router.navigate(['']);
  }
}
