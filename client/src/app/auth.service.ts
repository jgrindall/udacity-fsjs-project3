import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async isAuthenticated(): Promise<boolean> {
    return false;
  }

  async login(username: string, password: string): Promise<boolean> {

    /**
     *
     getUsingService(): Observable<[]> {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/comments');
  }

     */

    return false;
  }

  async logout(): Promise<boolean> {
    return true;
  }

}

