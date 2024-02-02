"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateNotifDto", {
    enumerable: true,
    get: function() {
        return UpdateNotifDto;
    }
});
const _mappedtypes = require("@nestjs/mapped-types");
const _createnotifdto = require("./create-notif.dto");
let UpdateNotifDto = class UpdateNotifDto extends (0, _mappedtypes.PartialType)(_createnotifdto.CreateNotifDto) {
};
