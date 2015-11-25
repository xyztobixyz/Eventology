define(['app/model/guest'],function(GuestModel){
    'use strict';
    var eventEditController = function($scope, $routeParams, $location, eventStore){
        this.scope = $scope;

        eventStore.getGuest($routeParams.eventId, $routeParams.guestId, function(guest) {
            this.scope.guest = guest;

            this.scope.create = function (guest) {
                eventStore.editGuest($routeParams.eventId, guest, function () {
                    $location.path("/events/" + $routeParams.eventId);
                }.bind(this), function () {
                })
            };
        }.bind(this), function(){});
    };

    eventEditController.$inject = ['$scope', '$routeParams', '$location', 'eventStorage'];
    return eventEditController;
});