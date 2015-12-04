define(['app/controllers/eventListController', 'app/service/eventStorage', 'frameworks/angular', 'libraries/angularMocks'],
    function (EventListController, EventStorage, Angular, AngularMocks) {
        'use strict';
        var serverURL="http://127.0.0.1:8080";
        var path= "/api";
        var scope, eventStorage, $httpBackend, $http;

        beforeEach(AngularMocks.inject(function($injector) {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            eventStorage = new EventStorage($http);
            scope = $injector.get('$rootScope').$new();

            $httpBackend.when('GET', serverURL+path+"/events").respond({
                events: [{id: 1, name: 'Dinner'},{id: 2, name: 'Lunch'}]
            });


        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('EventListController', function() {
            describe('property scope', function() {
                it('contains 3 events', function() {
                    var eventListController = new EventListController(scope, eventStorage);
                    $httpBackend.flush();
                    console.log(eventListController);
                    expect(2).toBe(eventListController.scope.events.length);
                });
            });
        });
    });