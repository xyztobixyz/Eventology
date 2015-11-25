/**
 * Created by Phil on 28.10.2015.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular','app/controllers/eventListController', 'app/controllers/eventDetailController', 'app/controllers/eventCreateController', 'app/controllers/eventEditController', 'app/controllers/guestEditController', 'app/controllers/guestCreateController', 'app/service/eventStorage','frameworks/angularRoute'],
    function (Angular, eventListController, eventDetailController, eventCreateController, eventEditController, guestEditController, guestCreateController, eventStorage) {

    var eventology = Angular.module('eventology', ['ngRoute'])
        .service('eventStorage', eventStorage)
        .controller('eventListController',eventListController)
        .controller('eventDetailController', eventDetailController)
        .controller('eventCreateController', eventCreateController)
        .controller('eventEditController', eventEditController)
        .controller('guestEditController', guestEditController)
        .controller('guestCreateController', guestCreateController)
    ;


    eventology.config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                controller: 'eventListController',
                templateUrl: '/views/list.html'
            })
            .when('/events/new', {
                controller: 'eventCreateController',
                templateUrl: '/views/edit.html'
            })
            .when('/events/:eventId/guests/new', {
                controller: 'guestCreateController',
                templateUrl: '/views/edit_guest.html'
            })
            .when('/events/:eventId/guests/:guestId', {
                controller: 'guestEditController',
                templateUrl: '/views/edit_guest.html'
            })
            .when('/events/:eventId', {
                controller: 'eventDetailController',
                templateUrl: '/views/detail.html'
            })
            .when('/events/edit/:eventId', {
                controller: 'eventEditController',
                templateUrl: '/views/edit.html'
            })
            .otherwise({
                redirectTo: '/list'
            });
    });

    return eventology;
});