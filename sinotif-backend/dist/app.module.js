"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _path = require("path");
const _graphql = require("@nestjs/graphql");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _nestjsprisma = require("nestjs-prisma");
const _appcontroller = require("./app.controller");
const _appservice = require("./app.service");
const _appresolver = require("./app.resolver");
const _authmodule = require("./auth/auth.module");
const _usersmodule = require("./users/users.module");
const _postsmodule = require("./posts/posts.module");
const _config1 = /*#__PURE__*/ _interop_require_default(require("./common/configs/config"));
const _apollo = require("@nestjs/apollo");
const _gqlconfigservice = require("./gql-config.service");
const _nestjsfirebase = require("nestjs-firebase");
const _bannermodule = require("./banner/banner.module");
const _newsmodule = require("./news/news.module");
const _notifmodule = require("./notif/notif.module");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule.forRoot({
                isGlobal: true,
                load: [
                    _config1.default
                ]
            }),
            _nestjsprisma.PrismaModule.forRoot({
                isGlobal: true,
                prismaServiceOptions: {
                    middlewares: [
                        // configure your prisma middleware
                        (0, _nestjsprisma.loggingMiddleware)({
                            logger: new _common.Logger('PrismaMiddleware'),
                            logLevel: 'log'
                        })
                    ]
                }
            }),
            _graphql.GraphQLModule.forRootAsync({
                driver: _apollo.ApolloDriver,
                useClass: _gqlconfigservice.GqlConfigService
            }),
            _nestjsfirebase.FirebaseModule.forRoot({
                googleApplicationCredential: (0, _path.join)(__dirname, '../stikombanyuwangiapp-firebase-adminsdk.json')
            }),
            _authmodule.AuthModule,
            _usersmodule.UsersModule,
            _postsmodule.PostsModule,
            _bannermodule.BannerModule,
            _newsmodule.NewsModule,
            _notifmodule.NotifModule
        ],
        controllers: [
            _appcontroller.AppController
        ],
        providers: [
            _appservice.AppService,
            _appresolver.AppResolver
        ]
    })
], AppModule);
