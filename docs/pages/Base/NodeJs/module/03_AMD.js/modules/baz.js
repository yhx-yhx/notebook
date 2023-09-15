// 获取并使用 其他模块
define([
    'foo',
], function (foo, factory) {
    'use strict';
    console.log('baz');
    console.log(foo.name);
});