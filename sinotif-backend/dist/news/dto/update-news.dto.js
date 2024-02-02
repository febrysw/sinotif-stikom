"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateNewsDto", {
    enumerable: true,
    get: function() {
        return UpdateNewsDto;
    }
});
const _mappedtypes = require("@nestjs/mapped-types");
const _createnewsdto = require("./create-news.dto");
let UpdateNewsDto = class UpdateNewsDto extends (0, _mappedtypes.PartialType)(_createnewsdto.CreateNewsDto) {
};
