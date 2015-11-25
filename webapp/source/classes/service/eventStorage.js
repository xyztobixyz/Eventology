/**
 * Created by Phil on 18.11.2015.
 */
define(['app/model/event', 'app/model/guest'], function(EventModel, GuestModel){
    "use strict";
    var serverURL="http://127.0.0.1:8080";
    var path= "/api";

    var storageService = function($http){
        this.getAllEvents=function(onSuccess, onError){
            $http.get(serverURL+path+"/events")
                .success(function(data){
                    var events = data.events.map(function(eventDTO) {
                        return EventModel.createFromDTO(eventDTO);
                    });
                    onSuccess(events);
                })
                .error(onError);
        };
        this.getEvent=function(eventId, onSuccess, onError){
            $http.get(serverURL+path+"/events/"+eventId)
                .success(function(data){
                    onSuccess(EventModel.createFromDTO(data));
                })
                .error(onError)
            ;
        };
        this.addEvent=function(event, onSuccess, onError){
            $http.post(serverURL+path+"/events", event)
                .success(onSuccess)
                .error(onError);
        };
        this.editEvent=function(event, onSuccess, onError){
            $http.post(serverURL+path+"/events/"+event.id, event)
                .success(onSuccess)
                .error(onError);
        };
        this.getGuest=function(eventId, guestId, onSuccess, onError){
            $http.get(serverURL+path+"/events/"+eventId+"/guests/"+guestId)
                .success(function(data){
                    onSuccess(GuestModel.createFromDTO(data));
                })
                .error(onError)
            ;
        };
        this.addGuest=function(eventId, guest, onSuccess, onError){
            $http.post(serverURL+path+"/events/"+eventId+"/guests",guest)
                .success(onSuccess)
                .error(onError);
        };
        this.editGuest=function(eventId, guest, onSuccess, onError){
            $http.post(serverURL+path+"/events/"+eventId+"/guests/"+guest.id,guest)
                .success(onSuccess)
                .error(onError);
        };
    };
    storageService.$inject = ['$http'];

    return storageService;
});