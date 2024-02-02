"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const config = {
    nest: {
        port: 3333
    },
    cors: {
        enabled: true
    },
    swagger: {
        enabled: true,
        title: 'SINOTIF STIKOM',
        description: 'The Backend API for Sinotif STIKOM',
        version: '1.0',
        path: 'api'
    },
    graphql: {
        playgroundEnabled: true,
        debug: true,
        schemaDestination: './src/schema.graphql',
        sortSchema: true
    },
    security: {
        expiresIn: '1d',
        refreshIn: '7d',
        bcryptSaltOrRound: 10
    }
};
const _default = ()=>config;
