import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  login(body){
    return this.http.post(`${API_URL}/login`, body)
  }

  cadastrarUsuario(body){
    return this.http.post(`${API_URL}/create-user`, body)
  }


  searchError(error){
    if(error['error']){
      if(error['error'].message){

        return error['error'].message
      }else{
        return 'Ocorreu um erro inesperado, tente novamente mais tarde.'
      }
    }else{
    return 'Ocorreu um erro inesperado, tente novamente mais tarde.'
    }
  }
}
