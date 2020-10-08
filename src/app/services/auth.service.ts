import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Principal } from '../dtos/principal';
import { map } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Principal>
  currentUser$: Observable<Principal>


  constructor(private http: HttpClient) { 
    console.log('Instantiating Authservice');
    this.currentUserSubject = new BehaviorSubject<Principal>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    console.log('Authservice instantiation complete');
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  authenticate(username: string, password: string) {
    let credentials = { username, password };
    // return this.http.post(API_URL/auth, credentials, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   observe: 'response'
    // }).pipe(
    //   map(resp => {
    //     let principal = resp.body as Principal;
    //     this.currentUserSubject.next(principal);
    //   })
    // );
  }

  // logout() {
  //   this.http.get(API_URL/auth);
  //   this.currentUserSubject.next(null);
    
  // }

  isAuthentication(): boolean {
    return !!this.currentUserValue;
  }
}
