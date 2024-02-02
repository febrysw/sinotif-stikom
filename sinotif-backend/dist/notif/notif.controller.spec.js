"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _notifcontroller = require("./notif.controller");
const _notifservice = require("./notif.service");
describe('NotifController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _notifcontroller.NotifController
            ],
            providers: [
                _notifservice.NotifService
            ]
        }).compile();
        controller = module.get(_notifcontroller.NotifController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});
