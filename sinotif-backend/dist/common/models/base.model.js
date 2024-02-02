"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseModel", {
    enumerable: true,
    get: function() {
        return BaseModel;
    }
});
const _graphql = require("@nestjs/graphql");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let BaseModel = class BaseModel {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_graphql.ID),
    _ts_metadata("design:type", String)
], BaseModel.prototype, "id", void 0);
_ts_decorate([
    (0, _graphql.Field)({
        description: 'Identifies the date and time when the object was created.'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseModel.prototype, "createdAt", void 0);
_ts_decorate([
    (0, _graphql.Field)({
        description: 'Identifies the date and time when the object was last updated.'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseModel.prototype, "updatedAt", void 0);
BaseModel = _ts_decorate([
    (0, _graphql.ObjectType)({
        isAbstract: true
    })
], BaseModel);
