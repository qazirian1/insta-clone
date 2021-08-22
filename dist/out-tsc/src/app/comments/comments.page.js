import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CommentsPage = class CommentsPage {
    constructor(routeA, modalCtrl, zone, alertController, Activeroute, platform, route, navCtrl, authService, menuCtrl, commonService, popoverCtl) {
        this.routeA = routeA;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.alertController = alertController;
        this.Activeroute = Activeroute;
        this.platform = platform;
        this.route = route;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.commonService = commonService;
        this.popoverCtl = popoverCtl;
        this.allComments = [];
        this.routeA.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.vehicleData = JSON.parse(params.special);
                console.log(this.vehicleData);
            }
        });
    }
    ngOnInit() {
    }
};
CommentsPage = __decorate([
    Component({
        selector: 'app-comments',
        templateUrl: './comments.page.html',
        styleUrls: ['./comments.page.scss'],
    })
], CommentsPage);
export { CommentsPage };
//# sourceMappingURL=comments.page.js.map