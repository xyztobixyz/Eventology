define(['app/model/guest'],function(GuestModel){
    'use strict';
    var guestCreateController = function($scope, $routeParams, $location, eventStore){
        this.scope = $scope;

        this.scope.guest = new GuestModel();

        this.scope.create = function(guest){
            eventStore.addGuest($routeParams.eventId, guest, function(){
                $location.path("/events/"+$routeParams.eventId);
            }.bind(this), function(){})
        };
    };

    guestCreateController.$inject = ['$scope', '$routeParams', '$location', 'eventStorage'];
    return guestCreateController;
});