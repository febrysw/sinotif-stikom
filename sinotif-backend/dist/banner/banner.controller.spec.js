"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _bannercontroller = require("./banner.controller");
const _bannerservice = require("./banner.service");
describe('BannerController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _bannercontroller.BannerController
            ],
            providers: [
                _bannerservice.BannerService
            ]
        }).compile();
        controller = module.get(_bannercontroller.BannerController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});
