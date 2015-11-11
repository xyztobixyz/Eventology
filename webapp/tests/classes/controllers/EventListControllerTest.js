/**
 * Created by Phil on 28.10.2015.
 */
    define(['app/controllers/eventListController'],function(EventListController){
        'use strict';
        describe('EventListControllerTest', function(){
            describe('property scope', function(){
                it('contains 3 events', function(){
                    var scope={};
                    var EventListController=new EventListController(scope);
                    expect(3).toBe(EventListControllerTest.scope.events.length);
                })
            })
        })
    });