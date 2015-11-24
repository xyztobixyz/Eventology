/**
 * Created by Phil on 28.10.2015.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular','app/controllers/eventListController', 'app/service/eventStorage','frameworks/angularRoute'], function (Angular, eventListController, eventStorage) {

    var eventology = Angular.module('eventology', ['ngRoute']);

    eventology.service('eventStorage', eventStorage);
    eventology.controller('eventListController',eventListController);


    eventology.config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                controller: 'eventListController',
                templateUrl: '/views/list.html'
            })
            .otherwise({
                redirectTo: '/list'
            });
    });

    return eventology;
});