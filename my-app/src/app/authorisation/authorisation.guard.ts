import { 
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router 
  } from "@angular/router";
  import { Injectable } from "@angular/core";
  import { AuthorisationService } from "./authorisation.service";

  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthorisationService, private router: Router) {};

      canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): boolean {
        return this.authService.isAuthenticated()
      }
  } 