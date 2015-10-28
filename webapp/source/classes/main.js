/**
 * Created by Phil on 28.10.2015.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    path:{
        'frameworks/angular': 'frameworks/angular/angular.min', 'app': 'classes'
    },
    shim:{
        'frameworks/angular':{
            exports: 'angular'
        }
    }
});

define(['frameworks/angular'], function (angular) {
    var app = angular.module("Eventology");
    return angular.bootstrap(app);
});

//We need to
define(['frameworks/angular', 'app/modules/Eventology'], function (Angular, Eventology){
    return Angular.bootstrap(Eventology);
});