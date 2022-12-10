import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() login_active: boolean = false;
  @Input() cadastro_user_active: boolean = false;
  @Input() cadastro_points_active: boolean = false;
  @Input() pontos_coleta_active: boolean = false;
  @Input() artigos_active: boolean = false;
  @Input() usuario_logado: boolean = true;

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
