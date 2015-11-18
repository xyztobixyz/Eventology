/**
 * Created by Phil on 28.10.2015.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'frameworks/angular': 'frameworks/angular/angular.min',
        'frameworks/angularRoute': 'frameworks/angular/angular-route.js',
        'app': 'classes'
    },
    shim: {
        'frameworks/angular': {
            exports: 'angular'
        },
        'frameworks/angularRoute':{
            deps:['frameworks/angular']
        }
    }
});

require(['frameworks/angular', 'app/modules/eventology', 'app/controllers/eventListController'], function (Angular, eventology, eventListController) {
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [eventology.name]);
    });
});
