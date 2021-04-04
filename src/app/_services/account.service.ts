﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    data1
    state
    district
    BannerData: BehaviorSubject<any> = new BehaviorSubject('')
    districtdata: Subject<any> = new Subject<any>();
  
    url_statewise = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
    url_dailycases = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history'
    ulr_districtwise = "https://api.covid19india.org/state_district_wise.json"
    url_banner = "https://api.covid19india.org/website_data.json"


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }


    ngOnInit(): void {

        this.getDataStateWise()
      }
    
      getBanners(): Observable<any> {
        return this.http.get(this.url_banner)
      }
    
      getDataStateWise(): Observable<any> {
        return this.http.get(this.url_statewise)
      }
    
     getDailyCaseStatus(): Observable<any> {
        return this.http.get(this.url_dailycases)
      }
    
      getState(state) {
        this.state = state
      }
    
      getDataDistrictWise(state) {
        this.http.get(this.ulr_districtwise).subscribe(data => {
          this.data1 = data
        //  console.log(this.data1)
       //   console.log(this.data1[state])
          this.district = this.data1[state].districtData
        //  console.log(state)
          this.districtdata.next(this.district)
        }
        )
      }


    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}