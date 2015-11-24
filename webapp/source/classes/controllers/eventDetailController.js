define([],function(){
    'use strict';
    var eventDetailController = function($scope, $routeParams, eventStore){
        this.scope = $scope;
        eventStore.getEvent($routeParams.eventId, function(event){
            this.scope.event = event;
        }.bind(this), function(){});
    };

    eventDetailController.$inject = ['$scope', '$routeParams', 'eventStorage'];
    return eventDetailController;
});