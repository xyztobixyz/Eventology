define(['app/service/eventStorage', 'frameworks/angular', 'libraries/angularMocks', ''],
    function (EventStorage, Angular, AngularMocks) {
        'use strict';
        var serverURL="http://127.0.0.1:8080";
        var path= "/api";
        var eventStorage, $httpBackend, $http;

        beforeEach(AngularMocks.inject(function($injector) {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            eventStorage = new EventStorage($http);
            console.log("fuck");
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('get All events', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('GET', serverURL+path+"/events").respond({
                    events: [{id: 1, name: 'Dinner'},{id: 2, name: 'Lunch'}]
                });
            }));

            describe('event get all', function() {
                it('contains 2 events', function() {
                    eventStorage.getAllEvents(function(events){
                        expect(events.length).toBe(2);
                    }, function(){});
                    $httpBackend.flush();
                });

                it('has correct names', function(){
                    eventStorage.getAllEvents(function(events){
                        expect(events[0].name).toBe("Dinner");
                        expect(events[1].name).toBe("Lunch");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });
    });