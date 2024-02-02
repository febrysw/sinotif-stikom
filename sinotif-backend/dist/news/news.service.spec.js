"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _newsservice = require("./news.service");
describe('NewsService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _newsservice.NewsService
            ]
        }).compile();
        service = module.get(_newsservice.NewsService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});
