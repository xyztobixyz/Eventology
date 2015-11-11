/**
 * Created by Phil on 28.10.2015.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths:{
        'frameworks/angular': 'frameworks/angular/angular.min',
        'app': 'classes'
    },
    shim:{
        'frameworks/angular':{
            exports: 'angular'
        }
    }
});

require(['frameworks/angular', 'app/modules/Eventology', 'app/controllers/EventListController'], function (Angular, Eventology, EventListController) {
    var app=Angular.module("Eventology");
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [Eventology.name]);
    });
});
