/**
 * Created by Phil on 28.10.2015.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular','app/controllers/eventListController'], function (Angular, eventListController) {

    // Create new empty app/module named 'Eventology'
    var eventology = Angular.module('eventology', ['ng-Route']);
    eventology.controller('eventListController',eventListController);
    eventListController.$inject=['$scope'];

    // export module to use it in other classes
    return eventology;
});