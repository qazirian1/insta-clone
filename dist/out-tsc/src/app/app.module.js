import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
        providers: [Keyboard, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map