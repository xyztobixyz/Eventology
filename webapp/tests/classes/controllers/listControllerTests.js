define(['app/controllers/eventListController', 'app/model/event', 'frameworks/angular', 'libraries/angularMocks'],
    function (EventListController, EventModel, Angular, AngularMocks) {
        'use strict';
        var scope, eventStorage;

        beforeEach(AngularMocks.inject(function($injector) {
            eventStorage = {
                getAllEvents: function(onSuccess, onError){
                    var events = [];
                    events.push(EventModel.createFromDTO({
                        id: "1234567891",
                        name: "TestEvent1",
                        description: "Eine Beschreibung so schoen wie nichts!1",
                        targetGroup: "WOW1",
                        contributionsDescription: "Mitbringen was zu haben ist1",
                        location: {
                            name: "Test1",
                            street: "Teststr 1",
                            zipCode: 1111,
                            city: "Stadt1" },
                        maximalAmountOfGuests: 10,
                        times: {
                            begin: "2015-12-12T12:12:00Z",
                            end: "2016-12-12T12:12:00Z" },
                        guests: []
                    }));

                    events.push(EventModel.createFromDTO({
                        id: "1234567892",
                        name: "TestEvent2",
                        description: "Eine Beschreibung so schoen wie nichts!2",
                        targetGroup: "WOW2",
                        contributionsDescription: "Mitbringen was zu haben ist2",
                        location: {
                            name: "Test2",
                            street: "Teststr 2",
                            zipCode: 2222,
                            city: "Stadt2" },
                        maximalAmountOfGuests: 15,
                        times: {
                            begin: "2015-12-12T12:12:00Z",
                            end: "2016-12-12T12:12:00Z" },
                        guests: []
                    }));

                    events.push(EventModel.createFromDTO({
                        id: "1234567893",
                        name: "TestEvent3",
                        description: "Eine Beschreibung so schoen wie nichts!3",
                        targetGroup: "WOW3",
                        contributionsDescription: "Mitbringen was zu haben ist3",
                        location: {
                            name: "Test3",
                            street: "Teststr 3",
                            zipCode: 3333,
                            city: "Stadt3" },
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
                    expect(eventListController.scope.events[0].id).toBe("1234567891");
                    expect(eventListController.scope.events[1].id).toBe("1234567892");
                    expect(eventListController.scope.events[2].id).toBe("1234567893");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].name).toBe("TestEvent1");
                    expect(eventListController.scope.events[1].name).toBe("TestEvent2");
                    expect(eventListController.scope.events[2].name).toBe("TestEvent3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].description).toBe("Eine Beschreibung so schoen wie nichts!1");
                    expect(eventListController.scope.events[1].description).toBe("Eine Beschreibung so schoen wie nichts!2");
                    expect(eventListController.scope.events[2].description).toBe("Eine Beschreibung so schoen wie nichts!3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].targetGroup).toBe("WOW1");
                    expect(eventListController.scope.events[1].targetGroup).toBe("WOW2");
                    expect(eventListController.scope.events[2].targetGroup).toBe("WOW3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].contributionsDescription).toBe("Mitbringen was zu haben ist1");
                    expect(eventListController.scope.events[1].contributionsDescription).toBe("Mitbringen was zu haben ist2");
                    expect(eventListController.scope.events[2].contributionsDescription).toBe("Mitbringen was zu haben ist3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].location.name).toBe("Test1");
                    expect(eventListController.scope.events[1].location.name).toBe("Test2");
                    expect(eventListController.scope.events[2].location.name).toBe("Test3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].location.street).toBe("Teststr 1");
                    expect(eventListController.scope.events[1].location.street).toBe("Teststr 2");
                    expect(eventListController.scope.events[2].location.street).toBe("Teststr 3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].location.zipCode).toBe(1111);
                    expect(eventListController.scope.events[1].location.zipCode).toBe(2222);
                    expect(eventListController.scope.events[2].location.zipCode).toBe(3333);
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].location.city).toBe("Stadt1");
                    expect(eventListController.scope.events[1].location.city).toBe("Stadt2");
                    expect(eventListController.scope.events[2].location.city).toBe("Stadt3");
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].times.begin).toBe(new Date("2015-12-12T12:12:00Z"));
                    expect(eventListController.scope.events[1].times.begin).toBe(new Date("2015-12-12T12:12:00Z"));
                    expect(eventListController.scope.events[2].times.begin).toBe(new Date("2015-12-12T12:12:00Z"));
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].times.end).toBe(new Date("2016-12-12T12:12:00Z"));
                    expect(eventListController.scope.events[1].times.end).toBe(new Date("2016-12-12T12:12:00Z"));
                    expect(eventListController.scope.events[2].times.end).toBe(new Date("2016-12-12T12:12:00Z"));
                });
            });
        });

    });