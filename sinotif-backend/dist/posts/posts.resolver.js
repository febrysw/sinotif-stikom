"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostsResolver", {
    enumerable: true,
    get: function() {
        return PostsResolver;
    }
});
const _nestjsprisma = require("nestjs-prisma");
const _graphql = require("@nestjs/graphql");
const _prismarelaycursorconnection = require("@devoxa/prisma-relay-cursor-connection");
const _graphqlsubscriptions = require("graphql-subscriptions");
const _paginationargs = require("../common/pagination/pagination.args");
const _usermodel = require("../users/models/user.model");
const _postidargs = require("./args/post-id.args");
const _useridargs = require("./args/user-id.args");
const _postmodel = require("./models/post.model");
const _postconnectionmodel = require("./models/post-connection.model");
const _postorderinput = require("./dto/post-order.input");
const _postsservice = require("./posts.service");
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
const pubSub = new _graphqlsubscriptions.PubSub();
let PostsResolver = class PostsResolver {
    postCreated() {
        return pubSub.asyncIterator('postCreated');
    }
    // @UseGuards(GqlAuthGuard)
    // @Mutation(() => Post)
    // async createPost(
    //   @UserEntity() user: User,
    //   @Args('data') data: CreatePostInput,
    // ) {
    //   const newPost = this.prisma.post.create({
    //     data: {
    //       published: true,
    //       title: data.title,
    //       content: data.content,
    //       type: data.type,
    //       link: data.link,
    //       image: data.image,
    //       authorId: user.id,
    //     },
    //   });
    //   pubSub.publish('postCreated', { postCreated: newPost });
    //   return newPost;
    // }
    async publishedPosts({ after, before, first, last }, query, orderBy) {
        const a = await (0, _prismarelaycursorconnection.findManyCursorConnection)((args)=>this.prisma.post.findMany({
                include: {
                    author: true
                },
                where: {
                    published: true,
                    title: {
                        contains: query || ''
                    }
                },
                orderBy: orderBy ? {
                    [orderBy.field]: orderBy.direction
                } : undefined,
                ...args
            }), ()=>this.prisma.post.count({
                where: {
                    published: true,
                    title: {
                        contains: query || ''
                    }
                }
            }), {
            first,
            last,
            before,
            after
        });
        return a;
    }
    userPosts(id) {
        return this.prisma.user.findUnique({
            where: {
                id: id.userId
            }
        }).posts({
            where: {
                published: true
            }
        });
    // or
    // return this.prisma.posts.findMany({
    //   where: {
    //     published: true,
    //     author: { id: id.userId }
    //   }
    // });
    }
    async post(id) {
        return this.prisma.post.findUnique({
            where: {
                id: id.postId
            }
        });
    }
    async author(post) {
        return this.prisma.post.findUnique({
            where: {
                id: post.id
            }
        }).author();
    }
    async sendNotif() {
        const message = {
            topic: 'e-sim',
            data: {
                type: 'external',
                link: 'google.com',
                title: 'testing',
                body: 'content',
                image: 'https://unsplash.com/photos/a-single-red-rose-with-a-piece-of-paper-taped-to-it-w9abY2QLLD0'
            },
            notification: {
                title: 'testing',
                body: 'content',
                image: 'https://unsplash.com/photos/a-single-red-rose-with-a-piece-of-paper-taped-to-it-w9abY2QLLD0'
            }
        };
        return this.postService.sendNotif(message);
    }
    constructor(prisma, postService){
        this.prisma = prisma;
        this.postService = postService;
    }
};
_ts_decorate([
    (0, _graphql.Subscription)(()=>_postmodel.Post),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], PostsResolver.prototype, "postCreated", null);
_ts_decorate([
    (0, _graphql.Query)(()=>_postconnectionmodel.PostConnection),
    _ts_param(0, (0, _graphql.Args)()),
    _ts_param(1, (0, _graphql.Args)({
        name: 'query',
        type: ()=>String,
        nullable: true
    })),
    _ts_param(2, (0, _graphql.Args)({
        name: 'orderBy',
        type: ()=>_postorderinput.PostOrder,
        nullable: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationargs.PaginationArgs === "undefined" ? Object : _paginationargs.PaginationArgs,
        String,
        typeof _postorderinput.PostOrder === "undefined" ? Object : _postorderinput.PostOrder
    ])
], PostsResolver.prototype, "publishedPosts", null);
_ts_decorate([
    (0, _graphql.Query)(()=>[
            _postmodel.Post
        ]),
    _ts_param(0, (0, _graphql.Args)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _useridargs.UserIdArgs === "undefined" ? Object : _useridargs.UserIdArgs
    ])
], PostsResolver.prototype, "userPosts", null);
_ts_decorate([
    (0, _graphql.Query)(()=>_postmodel.Post),
    _ts_param(0, (0, _graphql.Args)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postidargs.PostIdArgs === "undefined" ? Object : _postidargs.PostIdArgs
    ])
], PostsResolver.prototype, "post", null);
_ts_decorate([
    (0, _graphql.ResolveField)('author', ()=>_usermodel.User),
    _ts_param(0, (0, _graphql.Parent)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postmodel.Post === "undefined" ? Object : _postmodel.Post
    ])
], PostsResolver.prototype, "author", null);
_ts_decorate([
    (0, _graphql.Query)(()=>String),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], PostsResolver.prototype, "sendNotif", null);
PostsResolver = _ts_decorate([
    (0, _graphql.Resolver)(()=>_postmodel.Post),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjsprisma.PrismaService === "undefined" ? Object : _nestjsprisma.PrismaService,
        typeof _postsservice.PostsService === "undefined" ? Object : _postsservice.PostsService
    ])
], PostsResolver);
