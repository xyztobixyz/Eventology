/**
 * Created by Phil on 28.10.2015.
 */
    define(['app/controller/EventListController'],function(EventListController){
        'use strict';
        describe('EventListController', function(){
            describe('property scope', function(){
                it('contains 3 events', function(){
                    var scope={};
                    var EventListController=new EventListController(scope);
                    expect(3).toBe(EventListController.scope.events.length);
                })
            })
        })
    });