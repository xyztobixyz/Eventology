define(['app/controllers/eventListController', 'app/model/event', 'frameworks/angular', 'libraries/angularMocks'],
    function (EventListController, EventModel, Angular, AngularMocks) {
        'use strict';
        var serverURL="http://127.0.0.1:8080";
        var path= "/api";
        var scope, eventStorage;

        beforeEach(AngularMocks.inject(function($injector) {
            eventStorage = {
                getAllEvents: function(onSuccess, onError){
                    var events = [];
                    events.push(EventModel.createFromDTO({
                        id: "1234567891",
                        name: "TestEvent",
                        description: "Eine Beschreibung so schön wie nichts!",
                        targetGroup: "WOW",
                        contributionDescription: "Mitbringen was zu haben ist",
                        location: {
                            name: "Test",
                            street: "eineStr",
                            zipCode: 1234,
                            city: "Stadt" },
                        maximalAmountOfGuests: 10,
                        times: {
                            begin: "2015-12-12T12:12:00Z",
                            end: "2016-12-12T12:12:00Z" },
                        guests: []
                    }));

                    events.push(EventModel.createFromDTO({
                        id: "1234567892",
                        name: "TestEvent2",
                        description: "Eine Beschreibung so schön wie nichts!2",
                        targetGroup: "WOW!!",
                        contributionDescription: "Mitbringen was zu haben ist",
                        location: {
                            name: "Tes1123t",
                            street: "feineStr",
                            zipCode: 2234,
                            city: "Stadt123" },
                        maximalAmountOfGuests: 15,
                        times: {
                            begin: "2015-12-12T12:12:00Z",
                            end: "2016-12-12T12:12:00Z" },
                        guests: []
                    }));

                    events.push(EventModel.createFromDTO({
                        id: "1234567893",
                        name: "TestEvent3",
                        description: "Eine Beschreibung so schön wie nichts!234",
                        targetGroup: "WOWFuu",
                        contributionDescription: "Mitbringen was zu haben ist oder nichts",
                        location: {
                            name: "Test23",
                            street: "keineStr",
                            zipCode: 1239,
                            city: "Sta345dt" },
                        maximalAmountOfGuests: 100,
                        times: {
                            begin: "2015-12-12T12:12:00Z",
                            end: "2016-12-12T12:12:00Z" },
                        guests: []
                    }));
                    onSuccess(events);
                }
            };
            scope = $injector.get('$rootScope').$new();
        }));

        describe('EventListController', function() {
            var eventListController;

            beforeEach(AngularMocks.inject(function($injector) {
                eventListController = new EventListController(scope, eventStorage);
            }));

            describe('property scope', function() {
                it('contains 3 events', function() {
                    expect(eventListController.scope.events.length).toBe(3);
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].name).toBe("TestEvent");
                    expect(eventListController.scope.events[1].name).toBe("TestEvent2");
                    expect(eventListController.scope.events[2].name).toBe("TestEvent3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].name).toBe("TestEvent");
                    expect(eventListController.scope.events[1].name).toBe("TestEvent2");
                    expect(eventListController.scope.events[2].name).toBe("TestEvent3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].name).toBe("TestEvent");
                    expect(eventListController.scope.events[1].name).toBe("TestEvent2");
                    expect(eventListController.scope.events[2].name).toBe("TestEvent3");
                });
            });
        });

    });