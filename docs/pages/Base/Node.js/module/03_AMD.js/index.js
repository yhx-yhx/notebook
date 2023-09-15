; (function () { 
    require.define({
        baseUrl: '',
        paths: {
            "baz": "./modules/baz",
            "foo": "./modules/foo"
        },
        require(['foo'], function(foo) { })
    });
})