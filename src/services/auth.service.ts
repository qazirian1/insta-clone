import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    environment:any=environment;
    constructor(private http: HttpClient,private router: Router) { 
    	
    }


    getData(type) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        let url = type;
        console.log(url);
        return this.http.get(url, httpOptions);
    }


    postData(content, type) {
        console.log(content);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        let url = type;
        console.log(url);
        return this.http.post(url, content, httpOptions);
    }


    
   
}
