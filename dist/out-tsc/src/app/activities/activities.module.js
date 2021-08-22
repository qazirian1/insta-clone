import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivitiesPageRoutingModule } from './activities-routing.module';
import { ActivitiesPage } from './activities.page';
let ActivitiesPageModule = class ActivitiesPageModule {
};
ActivitiesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ActivitiesPageRoutingModule
        ],
        declarations: [ActivitiesPage]
    })
], ActivitiesPageModule);
export { ActivitiesPageModule };
//# sourceMappingURL=activities.module.js.map