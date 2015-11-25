define([],function(){
    'use strict';
    var eventEditController = function($scope, $routeParams, eventStore, $location){
        this.scope = $scope;

        eventStore.getEvent($routeParams.eventId, function(event){
            this.scope.event = event;

            this.scope.create = function(event){
                eventStore.editEvent(event, function(){
                    $location.path("/events/"+event.id);
                }.bind(this), function(){})
            };

        }.bind(this), function(){});

    };

    eventEditController.$inject = ['$scope', '$routeParams', 'eventStorage', '$location'];
    return eventEditController;
});