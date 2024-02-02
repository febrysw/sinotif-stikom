"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotifModule", {
    enumerable: true,
    get: function() {
        return NotifModule;
    }
});
const _common = require("@nestjs/common");
const _notifservice = require("./notif.service");
const _notifcontroller = require("./notif.controller");
const _postsservice = require("../posts/posts.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NotifModule = class NotifModule {
};
NotifModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _notifcontroller.NotifController
        ],
        providers: [
            _notifservice.NotifService,
            _postsservice.PostsService
        ]
    })
], NotifModule);
