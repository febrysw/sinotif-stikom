"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: function() {
        return User;
    }
});
require("reflect-metadata");
const _graphql = require("@nestjs/graphql");
const _classvalidator = require("class-validator");
const _postmodel = require("../../posts/models/post.model");
const _basemodel = require("../../common/models/base.model");
const _client = require("@prisma/client");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
(0, _graphql.registerEnumType)(_client.Role, {
    name: 'Role',
    description: 'User role'
});
let User = class User extends _basemodel.BaseModel {
};
_ts_decorate([
    (0, _graphql.Field)(),
    (0, _classvalidator.IsEmail)(),
    _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "firstname", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>String, {
        nullable: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "lastname", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>_client.Role),
    _ts_metadata("design:type", typeof _client.Role === "undefined" ? Object : _client.Role)
], User.prototype, "role", void 0);
_ts_decorate([
    (0, _graphql.Field)(()=>[
            _postmodel.Post
        ], {
        nullable: true
    }),
    _ts_metadata("design:type", Object)
], User.prototype, "posts", void 0);
_ts_decorate([
    (0, _graphql.HideField)(),
    _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
User = _ts_decorate([
    (0, _graphql.ObjectType)()
], User);
