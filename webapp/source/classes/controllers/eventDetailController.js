define([],function(){
    'use strict';
    var eventDetailController = function($scope, $routeParams, eventStore){
        this.scope = $scope;
        eventStore.getEvent($routeParams.eventId, function(event){
            this.scope.event = event;

            this.scope.maxAmountReached = (function() {
                var numResGuests = 0;
                event.guests.forEach(function (guest) {
                    if(!guest.canceled){
                        numResGuests++;
                        console.log(numResGuests);
                    }
                });
                return event.maximalAmountOfGuests < numResGuests;
            }());

        }.bind(this), function(){});
    };

    eventDetailController.$inject = ['$scope', '$routeParams', 'eventStorage'];
    return eventDetailController;
});