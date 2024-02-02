"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BannerController", {
    enumerable: true,
    get: function() {
        return BannerController;
    }
});
const _common = require("@nestjs/common");
const _bannerservice = require("./banner.service");
const _createbannerdto = require("./dto/create-banner.dto");
const _updatebannerdto = require("./dto/update-banner.dto");
const _swagger = require("@nestjs/swagger");
const _querybannerdto = require("./dto/query-banner.dto");
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
let BannerController = class BannerController {
    async findAll(res, query) {
        try {
            const result = await this.bannerService.getBanner(query.status || '');
            if (result === null) {
                throw new _common.NotFoundException('Document not found');
            }
            const dataResponse = {
                response: {
                    code: _common.HttpStatus.OK,
                    message: 'Ok'
                },
                data: result
            };
            res.status(_common.HttpStatus.OK).json(dataResponse);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async findOne(res, id) {
        try {
            const result = await this.bannerService.getBannerByDocId(id);
            if (result === null) {
                throw new _common.NotFoundException('Document not found');
            }
            const dataResponse = {
                response: {
                    code: _common.HttpStatus.OK,
                    message: 'Ok'
                },
                data: result
            };
            res.status(_common.HttpStatus.OK).json(dataResponse);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async create(res, createBannerDto) {
        try {
            const result = await this.bannerService.createBanner(createBannerDto);
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
    async update(res, id, updateBannerDto) {
        try {
            const result = await this.bannerService.updateBanner(id, updateBannerDto);
            // console.log(result);
            const dataResponse = {
                response: {
                    code: _common.HttpStatus.OK,
                    message: 'Ok'
                },
                data: result
            };
            res.status(_common.HttpStatus.OK).json(dataResponse);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async remove(res, id) {
        try {
            const result = await this.bannerService.removeBanner(id);
            // console.log(result);
            const dataResponse = {
                response: {
                    code: _common.HttpStatus.OK,
                    message: 'Ok'
                },
                data: result
            };
            res.status(_common.HttpStatus.OK).json(dataResponse);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    constructor(bannerService){
        this.bannerService = bannerService;
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _swagger.ApiResponse)({
        status: 200,
        description: 'Ok'
    }),
    (0, _swagger.ApiResponse)({
        status: 404,
        description: 'Not Found'
    }),
    _ts_param(0, (0, _common.Res)()),
    _ts_param(1, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        typeof _querybannerdto.QueryBannerDto === "undefined" ? Object : _querybannerdto.QueryBannerDto
    ])
], BannerController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _swagger.ApiResponse)({
        status: 200,
        description: 'Ok'
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
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        String
    ])
], BannerController.prototype, "findOne", null);
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
        typeof _createbannerdto.CreateBannerDto === "undefined" ? Object : _createbannerdto.CreateBannerDto
    ])
], BannerController.prototype, "create", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    (0, _swagger.ApiResponse)({
        status: 200,
        description: 'Ok'
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
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        String,
        typeof _updatebannerdto.UpdateBannerDto === "undefined" ? Object : _updatebannerdto.UpdateBannerDto
    ])
], BannerController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _swagger.ApiResponse)({
        status: 200,
        description: 'Ok'
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
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        String
    ])
], BannerController.prototype, "remove", null);
BannerController = _ts_decorate([
    (0, _common.Controller)('banner'),
    (0, _swagger.ApiTags)('Banner'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _bannerservice.BannerService === "undefined" ? Object : _bannerservice.BannerService
    ])
], BannerController);
