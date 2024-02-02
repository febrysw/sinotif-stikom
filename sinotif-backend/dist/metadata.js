/* eslint-disable */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const _default = async ()=>{
    const t = {
        ["./users/models/user.model"]: await Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./users/models/user.model")))
    };
    return {
        "@nestjs/swagger/plugin": {
            "models": [
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/dto/login.dto"))),
                    {
                        "LoginDto": {
                            email: {
                                required: true,
                                type: ()=>String
                            },
                            password: {
                                required: true,
                                type: ()=>String,
                                minLength: 8
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./banner/dto/create-banner.dto"))),
                    {
                        "CreateBannerDto": {
                            title: {
                                required: true,
                                type: ()=>String
                            },
                            url: {
                                required: true,
                                type: ()=>String
                            },
                            description: {
                                required: true,
                                type: ()=>String
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./banner/dto/update-banner.dto"))),
                    {
                        "UpdateBannerDto": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./news/dto/create-news.dto"))),
                    {
                        "CreateNewsDto": {
                            title: {
                                required: true,
                                type: ()=>String
                            },
                            url: {
                                required: true,
                                type: ()=>String
                            },
                            date: {
                                required: true,
                                type: ()=>String
                            },
                            posted: {
                                required: true,
                                type: ()=>String
                            },
                            category: {
                                required: true,
                                type: ()=>String
                            },
                            slug: {
                                required: true,
                                type: ()=>String
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./news/dto/update-news.dto"))),
                    {
                        "UpdateNewsDto": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./notif/dto/create-notif.dto"))),
                    {
                        "CreateNotifDto": {
                            topic: {
                                required: true,
                                type: ()=>String
                            },
                            data: {
                                required: true,
                                type: ()=>Object
                            },
                            notification: {
                                required: true,
                                type: ()=>Object
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./notif/dto/update-notif.dto"))),
                    {
                        "UpdateNotifDto": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./banner/entities/banner.entity"))),
                    {
                        "Banner": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./news/entities/news.entity"))),
                    {
                        "News": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./notif/entities/notif.entity"))),
                    {
                        "Notif": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./banner/dto/query-banner.dto"))),
                    {
                        "CreateBannerDto": {
                            status: {
                                required: true,
                                type: ()=>String
                            }
                        },
                        "QueryBannerDto": {
                            status: {
                                required: true,
                                type: ()=>String
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./notif/dto/query-banner.dto"))),
                    {
                        "QueryBannerDto": {
                            status: {
                                required: true,
                                type: ()=>String
                            }
                        }
                    }
                ]
            ],
            "controllers": [
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./app.controller"))),
                    {
                        "AppController": {
                            "getHello": {
                                type: String
                            },
                            "getHelloName": {
                                type: String
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/auth.controller"))),
                    {
                        "AuthController": {
                            "login": {},
                            "logout": {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/posts.controller"))),
                    {
                        "PostsController": {
                            "send": {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./banner/banner.controller"))),
                    {
                        "BannerController": {
                            "findAll": {},
                            "findOne": {},
                            "create": {},
                            "update": {},
                            "remove": {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./news/news.controller"))),
                    {
                        "NewsController": {
                            "findAll": {},
                            "findOne": {},
                            "create": {},
                            "update": {},
                            "remove": {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./notif/notif.controller"))),
                    {
                        "NotifController": {
                            "findAll": {},
                            "findOne": {},
                            "create": {},
                            "update": {},
                            "remove": {}
                        }
                    }
                ]
            ]
        },
        "@nestjs/graphql/plugin": {
            "models": [
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/dto/signup.input"))),
                    {
                        "SignupInput": {
                            email: {},
                            password: {},
                            firstname: {
                                nullable: true
                            },
                            lastname: {
                                nullable: true
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/models/token.model"))),
                    {
                        "Token": {
                            accessToken: {},
                            refreshToken: {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./common/models/base.model"))),
                    {
                        "BaseModel": {
                            id: {},
                            createdAt: {},
                            updatedAt: {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/models/post.model"))),
                    {
                        "Post": {
                            title: {},
                            content: {
                                nullable: true
                            },
                            published: {},
                            author: {
                                nullable: true
                            },
                            type: {
                                nullable: true
                            },
                            link: {
                                nullable: true
                            },
                            image: {
                                nullable: true
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./users/models/user.model"))),
                    {
                        "User": {
                            email: {},
                            firstname: {
                                nullable: true
                            },
                            lastname: {
                                nullable: true
                            },
                            role: {},
                            posts: {
                                nullable: true
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/models/auth.model"))),
                    {
                        "Auth": {
                            user: {
                                type: ()=>t["./users/models/user.model"].User
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/dto/login.input"))),
                    {
                        "LoginInput": {
                            email: {},
                            password: {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./auth/dto/refresh-token.input"))),
                    {
                        "RefreshTokenInput": {
                            token: {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./users/dto/change-password.input"))),
                    {
                        "ChangePasswordInput": {
                            oldPassword: {},
                            newPassword: {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./users/dto/update-user.input"))),
                    {
                        "UpdateUserInput": {
                            firstname: {
                                nullable: true
                            },
                            lastname: {
                                nullable: true
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./common/pagination/pagination.args"))),
                    {
                        "PaginationArgs": {
                            skip: {
                                nullable: true,
                                type: ()=>Number
                            },
                            after: {
                                nullable: true,
                                type: ()=>String
                            },
                            before: {
                                nullable: true,
                                type: ()=>String
                            },
                            first: {
                                nullable: true,
                                type: ()=>Number
                            },
                            last: {
                                nullable: true,
                                type: ()=>Number
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/args/post-id.args"))),
                    {
                        "PostIdArgs": {
                            postId: {
                                type: ()=>String
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/args/user-id.args"))),
                    {
                        "UserIdArgs": {
                            userId: {
                                type: ()=>String
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./common/pagination/page-info.model"))),
                    {
                        "PageInfo": {
                            endCursor: {
                                nullable: true
                            },
                            hasNextPage: {},
                            hasPreviousPage: {},
                            startCursor: {
                                nullable: true
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/models/post-connection.model"))),
                    {
                        "PostConnection": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/dto/post-order.input"))),
                    {
                        "PostOrder": {
                            field: {}
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./posts/dto/create-post.input"))),
                    {
                        "CreatePostInput": {
                            topic: {},
                            data: {},
                            notification: {
                                nullable: true
                            }
                        }
                    }
                ]
            ]
        }
    };
};
