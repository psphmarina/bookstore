export class AuthorisationService {
    loggedIn = false;

    isAuthenticated() {
      return this.loggedIn;
    }

    login() {
      this.loggedIn = true;
    }

    logout() {
      this.loggedIn = false;
      localStorage.clear();
    }
  } 