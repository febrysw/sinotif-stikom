"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RolesGuard", {
    enumerable: true,
    get: function() {
        return RolesGuard;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _graphql = require("@nestjs/graphql");
const _nestjsprisma = require("nestjs-prisma");
const _rolesdecorator = require("../common/decorators/roles.decorator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RolesGuard = class RolesGuard {
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(_rolesdecorator.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles) {
            return true;
        }
        const gqlContext = _graphql.GqlExecutionContext.create(context);
        const req = gqlContext.getContext().req;
        const user = req.user;
        if (user) {
            return requiredRoles.includes(user.role);
        } else {
            return false;
        }
    }
    constructor(prisma, reflector){
        this.prisma = prisma;
        this.reflector = reflector;
    }
};
RolesGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjsprisma.PrismaService === "undefined" ? Object : _nestjsprisma.PrismaService,
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector
    ])
], RolesGuard);
