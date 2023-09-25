import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private user: User = {email:''}

  constructor(private http: HttpClient) { }
  public login(query:string):Observable<User>{
    const url:string   = '';
    return this.http.get<User>(query);
  }
}
