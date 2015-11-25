define(['app/model/event'],function(EventModel){
    'use strict';
    var eventCreateController = function($scope, $routeParams, $location, eventStore){
        this.scope = $scope;

        this.scope.event = new EventModel();
        console.log(this.scope.event);
        this.scope.create = function(newEvent){
            eventStore.addEvent(newEvent, function(){
                //$location.path("/events/"+newEvent.id);
            }.bind(this), function(){})
        };
    };

    eventCreateController.$inject = ['$scope', '$routeParams', '$location', 'eventStorage'];
    return eventCreateController;
});