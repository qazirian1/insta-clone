import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.environment = environment;
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
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map