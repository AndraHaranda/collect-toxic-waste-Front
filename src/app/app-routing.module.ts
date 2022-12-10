import { ProtegeRotas } from './services/protege-rotas/protege-rotas.component';
import { CadastrarUsuarioComponent } from './containers/cadastrar-usuario/cadastrar-usuario.component';
import { PrincipalComponent } from './containers/principal/principal.component';
import { LoginComponent } from './containers/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { PontosColetaComponent } from './containers/pontos-coleta/pontos-coleta.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'principal',
    component:PontosColetaComponent,
  },
  {
    path:'realizar-cadastro',
    component: CadastrarUsuarioComponent,
  },
  {
    path:'cadastrar-ponto-coleta',
    component: ProdutosComponent,
  },
  {
    path:'artigos',
    component: PrincipalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
