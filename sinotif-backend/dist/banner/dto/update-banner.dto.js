"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBannerDto", {
    enumerable: true,
    get: function() {
        return UpdateBannerDto;
    }
});
const _mappedtypes = require("@nestjs/mapped-types");
const _createbannerdto = require("./create-banner.dto");
let UpdateBannerDto = class UpdateBannerDto extends (0, _mappedtypes.PartialType)(_createbannerdto.CreateBannerDto) {
};
