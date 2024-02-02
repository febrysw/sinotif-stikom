"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostsController", {
    enumerable: true,
    get: function() {
        return PostsController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _postsservice = require("./posts.service");
const _createpostinput = require("./dto/create-post.input");
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
let PostsController = class PostsController {
    async send(res, createPostInput) {
        try {
            const result = await this.postsService.sendNotif(createPostInput);
            // console.log(result);
            const dataResponse = {
                response: {
                    code: _common.HttpStatus.CREATED,
                    message: 'Created'
                },
                data: result
            };
            res.status(_common.HttpStatus.CREATED).json(dataResponse);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    constructor(postsService){
        this.postsService = postsService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    (0, _swagger.ApiResponse)({
        status: 201,
        description: 'Created'
    }),
    (0, _swagger.ApiResponse)({
        status: 400,
        description: 'Bad Request'
    }),
    (0, _swagger.ApiResponse)({
        status: 403,
        description: 'Forbidden'
    }),
    (0, _swagger.ApiResponse)({
        status: 404,
        description: 'Not Found'
    }),
    (0, _swagger.ApiResponse)({
        status: 413,
        description: 'Payload Too Large'
    }),
    (0, _swagger.ApiResponse)({
        status: 500,
        description: 'Internal Server Error'
    }),
    _ts_param(0, (0, _common.Res)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        typeof _createpostinput.CreatePostInput === "undefined" ? Object : _createpostinput.CreatePostInput
    ])
], PostsController.prototype, "send", null);
PostsController = _ts_decorate([
    (0, _common.Controller)('send'),
    (0, _swagger.ApiTags)('Posts'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postsservice.PostsService === "undefined" ? Object : _postsservice.PostsService
    ])
], PostsController);
