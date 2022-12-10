import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PrincipalComponent } from './containers/principal/principal.component';
import { CadastrarUsuarioComponent } from './containers/cadastrar-usuario/cadastrar-usuario.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { PontosColetaComponent } from './containers/pontos-coleta/pontos-coleta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    CadastrarUsuarioComponent,
    ProdutosComponent,
    PontosColetaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
