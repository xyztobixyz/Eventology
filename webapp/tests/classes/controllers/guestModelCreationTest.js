define(['app/controllers/guestCreateController', 'app/model/event', 'frameworks/angular', 'libraries/angularMocks'],
    function (GuestCreateController, EventModel, Angular, AngularMocks) {
        'use strict';
        var scope, eventStorage, $location, guestCreateController, testVar = "false";

        beforeEach(AngularMocks.inject(function($injector) {
            eventStorage = {
                addGuest: function(eventId, guest, onSuccess, onError){
                    testVar = "true";
                }
            };
            $location = $injector.get('$location');
            scope = $injector.get('$rootScope').$new();

            guestCreateController = new GuestCreateController(scope, {eventId: 1}, $location, eventStorage);
        }));

        describe('Event Creation Test', function() {
            it("creates model", function(){
                guestCreateController.scope.guest.name = "TestGuest"; // USER Inputs
                guestCreateController.scope.guest.contribution = "Ein Mitbringsel";
                guestCreateController.scope.guest.comment = "WOW event much good";
                guestCreateController.scope.guest.canceled = false;

                guestCreateController.scope.create(guestCreateController.scope.guest);

                expect(testVar).toBe("true");

            });
        });

    });