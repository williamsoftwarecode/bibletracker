import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService, 
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedAuthenticationService.isUserLoggedIn()) {
      return true; 
    } else {
      this.router.navigate(["login"]); 
      return false; 
    }
  }
}
