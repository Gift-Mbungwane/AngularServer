import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUsers()  {
    return this.http.get(this.rootURL + '/users');
  }


  addUser(user: any) {
    return this.http.post(this.rootURL + '/users', user);
  }
  private log(message:string) {
    // this.messageService.addMessage(`HeroService: ${message}`);
  }


}
