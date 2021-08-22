import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivitiesPage } from './activities.page';
const routes = [
    {
        path: '',
        component: ActivitiesPage
    }
];
let ActivitiesPageRoutingModule = class ActivitiesPageRoutingModule {
};
ActivitiesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ActivitiesPageRoutingModule);
export { ActivitiesPageRoutingModule };
//# sourceMappingURL=activities-routing.module.js.map