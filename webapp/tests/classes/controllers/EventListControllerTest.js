/**
 * Created by Phil on 28.10.2015.
 */
    define(['app/controllers/eventListControllerTest'],function(eventListControllerTest){
        'use strict';
        describe('eventListControllerTest', function(){
            describe('property scope', function(){
                it('contains 3 events', function(){
                    var scope={};
                    var eventListControllerTest=new eventListControllerTest(scope);
                    expect(3).toBe(eventListControllerTest.scope.events.length);
                })
            })
        })
    });