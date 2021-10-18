import { ProtegeRotas } from './services/protege-rotas/protege-rotas.component';
import { CadastrarUsuarioComponent } from './containers/cadastrar-usuario/cadastrar-usuario.component';
import { PrincipalComponent } from './containers/principal/principal.component';
import { LoginComponent } from './containers/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    component:PrincipalComponent,
    //CanActivate, protege a rota, caso tente acessar sem fazer login.
    canActivate:[ProtegeRotas]
  },
  {
    path:'realizar-cadastro',
    component: CadastrarUsuarioComponent,
    //CanActivate, protege a rota, caso tente acessar sem fazer login.
    canActivate:[ProtegeRotas]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
