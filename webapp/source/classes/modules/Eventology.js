/**
 * Created by Phil on 28.10.2015.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular','app/controllers/eventListController', 'app/controllers/eventDetailController', 'app/service/eventStorage','frameworks/angularRoute'], function (Angular, eventListController, eventDetailController, eventStorage) {

    var eventology = Angular.module('eventology', ['ngRoute'])
        .service('eventStorage', eventStorage)
        .controller('eventListController',eventListController)
        .controller('eventDetailController', eventDetailController)
    ;


    eventology.config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                controller: 'eventListController',
                templateUrl: '/views/list.html'
            })
            .when('/events/:eventId', {
                controller: 'eventDetailController',
                templateUrl: '/views/detail.html'
            })
            .otherwise({
                redirectTo: '/list'
            });
    });

    return eventology;
});