import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostPageRoutingModule } from './post-routing.module';
import { PostPage } from './post.page';
let PostPageModule = class PostPageModule {
};
PostPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PostPageRoutingModule
        ],
        declarations: [PostPage]
    })
], PostPageModule);
export { PostPageModule };
//# sourceMappingURL=post.module.js.map