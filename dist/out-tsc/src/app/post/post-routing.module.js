import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostPage } from './post.page';
const routes = [
    {
        path: '',
        component: PostPage
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PostPageRoutingModule);
export { PostPageRoutingModule };
//# sourceMappingURL=post-routing.module.js.map