/**
 * Created by Phil on 18.11.2015.
 */
define(['app/model/event'], function(EventModel){
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
        this.getSingleEvent=function(eventId, onSuccess, onError){
           var response=$http.get(serverURL+path+"/events"+eventId);
           response.success(onSuccess);
           response.error(onError);
       };
       this.addEvent=function(event, onSuccess, onError){
           var response=$http.post(serverURL+path+"/events",event);
           response.success(onSuccess);
           response.error(onError);
       };
       this.addGuest=function(eventId, guest, onSuccess, onError){
           var response=$http.post(serverURL+path+"/events"+eventId+"/guests",guest);
           response.success(onSuccess);
           response.error(onError);
       };
    };
    storageService.$inject = ['$http'];

    return storageService;
});