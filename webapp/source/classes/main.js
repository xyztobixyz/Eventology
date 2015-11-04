/**
 * Created by Phil on 28.10.2015.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    path:{
        'frameworks/angular': 'frameworks/angular/angular.min',
        'app': 'classes'
    },
    shim:{
        'frameworks/angular':{
            exports: 'angular'
        }
    }
});


require(['angular', 'app/modules/Eventology', 'app/controllers/EventListController'], function (Angular, Eventology, EventListController) {
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [Eventology.name]);
    });
});
