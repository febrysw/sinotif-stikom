"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _bannerservice = require("./banner.service");
describe('BannerService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _bannerservice.BannerService
            ]
        }).compile();
        service = module.get(_bannerservice.BannerService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});
