"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PasswordService", {
    enumerable: true,
    get: function() {
        return PasswordService;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _bcrypt = require("bcrypt");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PasswordService = class PasswordService {
    get bcryptSaltRounds() {
        const securityConfig = this.configService.get('security');
        const saltOrRounds = securityConfig.bcryptSaltOrRound;
        return Number.isInteger(Number(saltOrRounds)) ? Number(saltOrRounds) : saltOrRounds;
    }
    validatePassword(password, hashedPassword) {
        return (0, _bcrypt.compare)(password, hashedPassword);
    }
    hashPassword(password) {
        return (0, _bcrypt.hash)(password, this.bcryptSaltRounds);
    }
    constructor(configService){
        this.configService = configService;
    }
};
PasswordService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], PasswordService);
