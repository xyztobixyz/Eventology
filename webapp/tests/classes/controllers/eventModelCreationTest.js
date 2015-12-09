define(['app/controllers/eventCreateController', 'app/model/event', 'frameworks/angular', 'libraries/angularMocks'],
    function (EventCreateController, EventModel, Angular, AngularMocks) {
        'use strict';
        var scope, eventStorage, $location, eventCreateController, testVar = "false";

        beforeEach(AngularMocks.inject(function($injector) {
            eventStorage = {
                addEvent: function(event, onSuccess, onError){
                    testVar = "true";
                }
            };
            $location = $injector.get('$location');
            scope = $injector.get('$rootScope').$new();

            eventCreateController = new EventCreateController(scope, {}, $location, eventStorage);
        }));

        describe('Event Creation Test', function() {
            it("creates model", function(){
                eventCreateController.scope.event.name = "TestEvent"; // USER Inputs
                eventCreateController.scope.event.description = "Eine Beschreibung";
                eventCreateController.scope.event.targetGroup = "TARGET";
                eventCreateController.scope.event.location.name = "einName";
                eventCreateController.scope.event.location.street = "eineStr";
                eventCreateController.scope.event.location.zipcode = 1234;
                eventCreateController.scope.event.location.city = "eineStadt";
                eventCreateController.scope.event.begin = "1985-04-12T23:20:50.52";
                eventCreateController.scope.event.end = "1985-04-12T23:20:50.52";
                eventCreateController.scope.event.contributionsDescription = "contrib";

                eventCreateController.scope.create(eventCreateController.scope.event);

                expect(testVar).toBe("true");

            });
        });

    });