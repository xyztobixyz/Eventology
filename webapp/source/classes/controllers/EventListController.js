/**
 * Created by Phil on 28.10.2015.
 */
    define([],function(){
        'use strict';
        var eventListController = function($scope){
            this.scope = $scope;
            this.scope.events=[
                {name: 'Lunch', place: 'Rapperswil', date: new Date('2015-10-10T10:00:00.000Z')},
                {name: 'Dinner', place: 'Z�rich', date: new Date('2015-04-05T16:00:00.000Z')},
                {name: 'Dinner', place: 'Rapperswil', date: new Date('2015-12-08T17:00:00.000Z')}
            ];
        };
        return eventListController;
    });