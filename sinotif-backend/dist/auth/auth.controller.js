"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _authservice = require("./auth.service");
const _logindto = require("./dto/login.dto");
const _swagger = require("@nestjs/swagger");
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
let AuthController = class AuthController {
    async login(res, loginDto) {
        try {
            const result = await this.authService.login(loginDto.email, loginDto.password);
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
    async logout(res) {
        try {
            const dataResponse = {
                response: {
                    code: _common.HttpStatus.OK,
                    message: 'Ok'
                }
            };
            res.status(_common.HttpStatus.OK).json(dataResponse);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    constructor(authService){
        this.authService = authService;
    }
};
_ts_decorate([
    (0, _common.Post)('login'),
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
        typeof _logindto.LoginDto === "undefined" ? Object : _logindto.LoginDto
    ])
], AuthController.prototype, "login", null);
_ts_decorate([
    (0, _common.Post)('logout'),
    (0, _swagger.ApiResponse)({
        status: 200,
        description: 'Ok'
    }),
    _ts_param(0, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ])
], AuthController.prototype, "logout", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    (0, _swagger.ApiTags)('Auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], AuthController);
