import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'activities',
                loadChildren: () => import('../activities/activities.module').then(m => m.ActivitiesPageModule)
            },
            {
                path: 'search',
                loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/activities',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/activities',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map