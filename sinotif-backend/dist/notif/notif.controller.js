"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotifController", {
    enumerable: true,
    get: function() {
        return NotifController;
    }
});
const _common = require("@nestjs/common");
const _notifservice = require("./notif.service");
const _createnotifdto = require("./dto/create-notif.dto");
const _updatenotifdto = require("./dto/update-notif.dto");
const _swagger = require("@nestjs/swagger");
const _querynotifdto = require("./dto/query-notif.dto");
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
let NotifController = class NotifController {
    async findAll(res, query) {
        try {
            const result = await this.notifService.getNotif(query.status || '');
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
            const result = await this.notifService.getNotifByDocId(id);
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
    async create(res, createNotifDto) {
        try {
            createNotifDto.topic = 'e-sim';
            const result = await this.notifService.createNotif(createNotifDto);
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
    async update(res, id, updateNotifDto) {
        try {
            updateNotifDto.topic = 'e-sim';
            const result = await this.notifService.updateNotif(id, updateNotifDto);
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
            const result = await this.notifService.removeNotif(id);
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
    constructor(notifService){
        this.notifService = notifService;
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
        typeof _querynotifdto.QueryNotifDto === "undefined" ? Object : _querynotifdto.QueryNotifDto
    ])
], NotifController.prototype, "findAll", null);
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
], NotifController.prototype, "findOne", null);
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
        typeof _createnotifdto.CreateNotifDto === "undefined" ? Object : _createnotifdto.CreateNotifDto
    ])
], NotifController.prototype, "create", null);
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
        typeof _updatenotifdto.UpdateNotifDto === "undefined" ? Object : _updatenotifdto.UpdateNotifDto
    ])
], NotifController.prototype, "update", null);
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
], NotifController.prototype, "remove", null);
NotifController = _ts_decorate([
    (0, _common.Controller)('notif'),
    (0, _swagger.ApiTags)('Notif'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _notifservice.NotifService === "undefined" ? Object : _notifservice.NotifService
    ])
], NotifController);
