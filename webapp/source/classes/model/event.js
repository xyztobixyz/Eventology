/**
 * Created by Phil on 17.11.2015.
 */
define(['app/model/guest'], function(GuestModel){
    var EventModel = function(id, name, description, targetGroup, contributionsDescription, location, times, maximalAmountOfGuests) {
        this.id=id || Math.floor((Math.random() * 1000000000) + 100000000);
        this.name = name || "";
        this.description = description || "";
        this.targetGroup = targetGroup || "";
        this.contributionsDescription = contributionsDescription;
        this.location = location || {name:"", street:"", zipCode:"", city: ""};
        this.times = times || {};
        this.maximalAmountOfGuests = maximalAmountOfGuests || 100;
        Object.defineProperty(this, 'begin', {
            get:function() {
                return this.times.begin;
            },
            set: function(begin){
                this.times.begin=begin;
            }
        });
        Object.defineProperty(this, 'end', {
            get:function(){
                return this.times.end;
            },
            set:function(end){
                this.times.end=end;
            }
        });
    };

    EventModel.createFromDTO = function(eventDTO) {
        var event = new EventModel(
            eventDTO.id,
            eventDTO.name,
            eventDTO.description,
            eventDTO.targetGroup,
            eventDTO.contributionsDescription,
            eventDTO.location,
            eventDTO.times,
            eventDTO.maximalAmountOfGuests
        );
        if(eventDTO.guests) {
            event.guests = eventDTO.guests.map(function(guestDTO) {
                return GuestModel.createFromDTO(guestDTO);
            });
        }
        return event;
    };

    return EventModel;
});