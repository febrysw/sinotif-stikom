"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostsService", {
    enumerable: true,
    get: function() {
        return PostsService;
    }
});
const _common = require("@nestjs/common");
const _nestjsfirebase = require("nestjs-firebase");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let PostsService = class PostsService {
    async sendNotif(message) {
        try {
            const response = await this.firebase.messaging.send(message);
            console.log('Successfully sent message:', response);
            return response;
        } catch (error) {
            console.log('Error sending message:', error);
            console.log('Error info:', error.errorInfo);
            throw error; // Re-throw the error to propagate it to the calling function
        }
    }
    constructor(firebase){
        this.firebase = firebase;
    }
};
PostsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _nestjsfirebase.InjectFirebaseAdmin)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjsfirebase.FirebaseAdmin === "undefined" ? Object : _nestjsfirebase.FirebaseAdmin
    ])
], PostsService);
