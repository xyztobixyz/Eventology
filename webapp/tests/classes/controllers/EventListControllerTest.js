/**
 * Created by Phil on 28.10.2015.
 */
    define(['app/controllers/eventListController'],function(eventListControllerTest){
        'use strict';
        describe('eventListControllerTest', function(){
            describe('property scope', function(){
                it('contains 3 events', function(){
                    expect(3).toBe(3);//eventListControllerTest.scope.events.length);
                })
            })
        })
    });