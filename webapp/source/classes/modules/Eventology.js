/**
 * Created by Phil on 28.10.2015.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular','app/controllers/EventListController'], function (Angular, EventListController) {

    // Create new empty app/module named 'Eventology'
    var Eventology = Angular.module('Eventology', []);
    Eventology.controller('EventListController',EventListController);
    EventListController.$inject=['$scope'];

    // export module to use it in other classes
    return Eventology;
});