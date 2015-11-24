/**
 * Created by Phil on 28.10.2015.
 */
    define([],function(){
        'use strict';
        var eventListController = function($scope, eventStore){
            this.scope = $scope;
            this.scope.events=eventStore.getAllEvents(function(events){
                this.scope.events = events;
            }.bind(this), function(){});
        };

        eventListController.$inject = ['$scope', 'eventStorage'];
        return eventListController;
    });