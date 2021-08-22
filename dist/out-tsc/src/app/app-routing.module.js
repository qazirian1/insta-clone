import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.PostPageModule)
    },
    {
        path: 'activities',
        loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
    },
    {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then(m => m.CommentsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map