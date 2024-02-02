"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _newscontroller = require("./news.controller");
const _newsservice = require("./news.service");
describe('NewsController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _newscontroller.NewsController
            ],
            providers: [
                _newsservice.NewsService
            ]
        }).compile();
        controller = module.get(_newscontroller.NewsController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});
