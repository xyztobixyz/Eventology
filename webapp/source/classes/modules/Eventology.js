/**
 * Created by Phil on 28.10.2015.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular'], function (Angular) {

    // Create new empty app/module named 'lafete'
    var Eventology = Angular.module('Eventology', []);

    // export module to use it in other classes
    return Eventology;
});