define(['app/model/event'],function(EventModel){
    'use strict';
    var eventCreateController = function($scope, $routeParams, $location, eventStore){
        this.scope = $scope;

        this.scope.event = new EventModel();

        this.scope.create = function(newEvent){
            eventStore.addEvent(newEvent, function(addedEvent){
                $location.path("/events/"+addedEvent.id);
            }.bind(this), function(){})
        };
    };

    eventCreateController.$inject = ['$scope', '$routeParams', '$location', 'eventStorage'];
    return eventCreateController;
});