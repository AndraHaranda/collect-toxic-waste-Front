import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProtegeRotas implements CanActivate  {

  token: string = sessionStorage.getItem('Token')
  constructor( private router: Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean> | Promise<boolean> {

    //Verifica se existe um token, se não existir redireciona pra login.
    if(!this.token){
      this.router.navigate(['login'])
      return false;
    }

    return true;
  }
}
