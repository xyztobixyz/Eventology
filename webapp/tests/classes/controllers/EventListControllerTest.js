define(['app/controllers/eventListController', 'app/controllers/eventDetailController', 'app/service/eventStorage', 'frameworks/angular', 'libraries/angularMocks', ''],
    function (EventListController, EventDetailController, EventStorage, Angular, AngularMocks) {
        'use strict';
        var serverURL="http://127.0.0.1:8080";
        var path= "/api";
        var scope, eventStorage, $httpBackend, $http, $routeParams, $location;

        beforeEach(AngularMocks.inject(function($injector) {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            eventStorage = new EventStorage($http);
            scope = $injector.get('$rootScope').$new();
            $location = $injector.get('$location');
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('EventListController', function() {
            var eventListController;

            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('GET', serverURL+path+"/events").respond({
                    events: [{id: 1, name: 'Dinner'},{id: 2, name: 'Lunch'}]
                });

                eventListController = new EventListController(scope, eventStorage);
                $httpBackend.flush();
            }));

            describe('property scope', function() {
                it('contains 2 events', function() {
                    expect(2).toBe(eventListController.scope.events.length);
                });

                it('event names', function(){
                    expect(eventListController.scope.events[0].name).toBe("Dinner");
                    expect(eventListController.scope.events[1].name).toBe("Lunch");
                });
            });
        });

        describe('EventDetailController', function() {
            var eventDetailController;

            beforeEach(AngularMocks.inject(function($injector) {
                $routeParams = {eventId: 1};
                $httpBackend.when('GET', serverURL+path+"/events/1").respond(
                {"id":1,"name":"HSR-Party","description":"Party an der HSR","targetGroup":"Studenten","contributionsDescription":"Kuchen","location":{"name":"HSR","street":"Oberseestrasse","plz":8640,"city":"Rapperswil"},"times":{"begin":"2015-11-15T19:00:00.000Z","end":"2011-11-16T03:00:00.000Z"},"guests":[{"id":1,"name":"Michael","contribution":"Schoggi-Kuchen","comment":"Bin sicher zu früh","canceled":false},{"id":2,"name":"Hans","contribution":"Hotdog-Cake","comment":null,"canceled":false}]}
                );

                eventDetailController = new EventDetailController(scope, $routeParams, eventStorage);
                $httpBackend.flush();
            }));

            describe('property scope', function() {
                it('event name and id', function() {
                    expect(1).toBe(eventDetailController.scope.event.id);
                    expect("HSR-Party").toBe(eventDetailController.scope.event.name);
                });
            });
        });
    });