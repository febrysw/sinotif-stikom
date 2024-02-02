"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrderDirection", {
    enumerable: true,
    get: function() {
        return OrderDirection;
    }
});
const _graphql = require("@nestjs/graphql");
var OrderDirection;
(function(OrderDirection) {
    OrderDirection[// Specifies an ascending order for a given `orderBy` argument.
    "asc"] = "asc";
    OrderDirection[// Specifies a descending order for a given `orderBy` argument.
    "desc"] = "desc";
})(OrderDirection || (OrderDirection = {}));
(0, _graphql.registerEnumType)(OrderDirection, {
    name: 'OrderDirection',
    description: 'Possible directions in which to order a list of items when provided an `orderBy` argument.'
});
