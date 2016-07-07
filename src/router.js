'use strict';
define(function(require) {
    var Backbone = require('backbone');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'MainCtrl',
            '*actions': 'NotFoundCtrl'
        },

        MainCtrl: require('app/controllers/main'),
        NotFoundCtrl: require('app/controllers/notfound')
    });

    return new AppRouter();
});
