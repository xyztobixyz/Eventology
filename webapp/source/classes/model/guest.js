/**
 * Created by Phil on 25.11.2015.
 */

define([], function(){
    var GuestModel = function(id, name, contribution, comment, cancelled) {
        this.id=id;
        this.name = name;
        this.contribution = contribution;
        this.comment=comment;
        this.cancelled=cancelled;
    };

    GuestModel.createFromDTO = function(guestDTO) {
        var guest = new GuestModel(
            guestDTO.id,
            guestDTO.name,
            guestDTO.contribution,
            guestDTO.comment,
            guestDTO.cancelled
        );
        return guest;
    };
    return GuestModel;
});