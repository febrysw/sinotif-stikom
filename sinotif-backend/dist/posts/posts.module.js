"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostsModule", {
    enumerable: true,
    get: function() {
        return PostsModule;
    }
});
const _common = require("@nestjs/common");
const _postsresolver = require("./posts.resolver");
const _postsservice = require("./posts.service");
const _postscontroller = require("./posts.controller");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let PostsModule = class PostsModule {
};
PostsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [],
        providers: [
            _postsresolver.PostsResolver,
            _postsservice.PostsService
        ],
        controllers: [
            _postscontroller.PostsController
        ]
    })
], PostsModule);
