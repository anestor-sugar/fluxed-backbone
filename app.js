/**
 * Created by nester on 7/6/16.
 */

requirejs.config({
    baseUrl: './',
    paths: {
        app: './app',
        underscore: './bower_components/underscore/underscore',
        backbone: './bower_components/backbone/backbone',
        jquery: './bower_components/jquery/dist/jquery.min',
        react: './bower_components/react/react',
        reactDOM: './bower_components/react/react-dom',
        flux: './node_modules/flux/dist/Flux',
        backboneLocalstorage: './node_modules/backbone.localstorage/backbone.localStorage'
    }
});

requirejs(['app/router', 'backbone'], function(router, Backbone) {
    router.navigate('/');
    Backbone.history.start();
});
