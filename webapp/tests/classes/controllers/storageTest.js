define(['app/service/eventStorage', 'frameworks/angular', 'libraries/angularMocks', 'app/model/event', 'app/model/guest'],
    function (EventStorage, Angular, AngularMocks, EventModel, GuestModel) {
        'use strict';
        var serverURL="http://127.0.0.1:8080";
        var path= "/api";
        var eventStorage, $httpBackend, $http;

        var postEvent, postGuest;

        beforeEach(AngularMocks.inject(function($injector) {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            eventStorage = new EventStorage($http);

            postEvent = EventModel.createFromDTO({
                "id":1,
                "name":"HSR-Party",
                "description":"Party an der HSR",
                "targetGroup":"Studenten",
                "contributionsDescription":"Kuchen",
                "location":{
                    "name":"HSR",
                    "street":"Oberseestrasse",
                    "plz":8640,"city":"Rapperswil"},
                "times":{
                    "begin":"2015-11-15T19:00:00.000Z",
                    "end":"2011-11-16T03:00:00.000Z"},
                "guests":[
                    {
                        "id":1,
                        "name":"Michael",
                        "contribution":"Schoggi-Kuchen",
                        "comment":"Bin sicher zu früh",
                        "canceled":false},
                    {
                        "id":2,
                        "name":"Hans",
                        "contribution":"Hotdog-Cake",
                        "comment":null,
                        "canceled":false}]});

            postGuest = GuestModel.createFromDTO({
                "id":1,
                "name":"Michael",
                "contribution":"Schoggi-Kuchen",
                "comment":"Bin sicher zu früh",
                "canceled":false});
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('get All Events', function() {
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

        describe('get Event', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('GET', serverURL+path+"/events/1").respond(
                    {
                        "id":1,
                        "name":"HSR-Party",
                        "description":"Party an der HSR",
                        "targetGroup":"Studenten",
                        "contributionsDescription":"Kuchen",
                        "location":{
                            "name":"HSR",
                            "street":"Oberseestrasse",
                            "plz":8640,"city":"Rapperswil"},
                        "times":{
                            "begin":"2015-11-15T19:00:00.000Z",
                            "end":"2011-11-16T03:00:00.000Z"},
                        "guests":[
                            {
                                "id":1,
                                "name":"Michael",
                                "contribution":"Schoggi-Kuchen",
                                "comment":"Bin sicher zu früh",
                                "canceled":false},
                            {
                                "id":2,
                                "name":"Hans",
                                "contribution":"Hotdog-Cake",
                                "comment":null,
                                "canceled":false}]
                    });
            }));

            describe('get by id', function() {
                it('contains correct properties', function() {
                    eventStorage.getEvent("1", function(event){
                        expect(event.id).toBe(1);
                        expect(event.name).toBe("HSR-Party");
                        expect(event.targetGroup).toBe("Studenten");
                        expect(event.location.name).toBe("HSR");

                    }, function(){});
                    $httpBackend.flush();
                });

                it('has correct guests', function(){
                    eventStorage.getEvent("1",function(event){
                        expect(event.guests[0].id).toBe(1);
                        expect(event.guests[0].name).toBe("Michael");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });

        describe('get guest', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('GET', serverURL+path+"/events/1/guests/1").respond(
                    {
                        "id":1,
                        "name":"Michael",
                        "contribution":"Schoggi-Kuchen",
                        "comment":"Bin sicher zu früh",
                        "canceled":false});
            }));

            describe('event guest', function() {
                it('has a correct id', function() {
                    eventStorage.getGuest(1,1,function(guest){
                        expect(guest.id).toBe(1);
                    }, function(){});
                    $httpBackend.flush();
                });

                it('has correct properties', function(){
                    eventStorage.getGuest(1,1,function(guest){
                        expect(guest.name).toBe("Michael");
                        expect(guest.contribution).toBe("Schoggi-Kuchen");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });

        describe('new event', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('POST', serverURL+path+"/events", postEvent).respond(postEvent);
            }));

            describe('add new event', function() {
                it('called onSuccess', function() {
                    eventStorage.addEvent(postEvent, function(){
                        expect("function to be called").toBe("function to be called");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });

        describe('edit event', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('POST', serverURL+path+"/events/1", postEvent).respond(postEvent);
            }));

            describe('edit event', function() {
                it('called onSuccess', function() {
                    eventStorage.editEvent(postEvent, function(){
                        expect("function to be called").toBe("function to be called");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });

        describe('new guest', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('POST', serverURL+path+"/events/1/guests", postGuest).respond(postGuest);
            }));

            describe('add new guest', function() {
                it('called onSuccess', function() {
                    eventStorage.addGuest(1, postGuest, function(){
                        expect("function to be called").toBe("function to be called");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });

        describe('edit guest', function() {
            beforeEach(AngularMocks.inject(function($injector) {
                $httpBackend.when('POST', serverURL+path+"/events/1/guests/1", postGuest).respond(postGuest);
            }));

            describe('edit guest', function() {
                it('called onSuccess', function() {
                    eventStorage.editGuest(1, postGuest, function(){
                        expect("function to be called").toBe("function to be called");
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });
    });