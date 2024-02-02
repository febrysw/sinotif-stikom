"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _notifservice = require("./notif.service");
describe('NotifService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _notifservice.NotifService
            ]
        }).compile();
        service = module.get(_notifservice.NotifService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});
