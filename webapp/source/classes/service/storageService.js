/**
 * Created by Phil on 18.11.2015.
 */
define([], function(event){
    "use strict";
    var serverURL="http://127.0.0.1:8080";
    var path= "/api";

    var storageService = function($http){
       var getAllEvents=function(onSuccess, onError){
           var response=$http.get(serverURL+path+"/events");
           response.success(onSuccess);
           response.error(onError);
       };
       var getSingleEvent=function(eventId, onSuccess, onError){
           var response=$http.get(serverURL+path+"/events"+eventId);
           response.success(onSuccess);
           response.error(onError);
       };
       var addEvent=function(event, onSuccess, onError){
           var response=$http.post(serverURL+path+"/events",event);
           response.success(onSuccess);
           response.error(onError);
       };
       var addGuest=function(eventId, guest, onSuccess, onError){
           var response=$http.post(serverURL+path+"/events"+event.id+"/guests",guest);
           response.success(onSuccess);
           response.error(onError);
       };
    };
    storageService.$inject = ['$http'];
    return storageService;
});