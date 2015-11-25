define([],function(){
    'use strict';
    var changeHelper = function(eventStore){
        this.changeEvent = function(newEvent){
            eventStore.addEvent(newEvent);
        };
    };

    changeHelper.$inject = ['eventStorage'];
    return changeHelper;
});