"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtStrategy", {
    enumerable: true,
    get: function() {
        return JwtStrategy;
    }
});
const _passportjwt = require("passport-jwt");
const _passport = require("@nestjs/passport");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _authservice = require("./auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtStrategy = class JwtStrategy extends (0, _passport.PassportStrategy)(_passportjwt.Strategy) {
    async validate(payload) {
        const user = await this.authService.validateUser(payload.userId);
        if (!user) {
            throw new _common.UnauthorizedException();
        }
        return user;
    }
    constructor(authService, configService){
        super({
            jwtFromRequest: _passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_ACCESS_SECRET')
        });
        this.authService = authService;
        this.configService = configService;
    }
};
JwtStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], JwtStrategy);
