/**
 * Created by Phil on 25.11.2015.
 */

define([], function(){
    var GuestModel = function(id, name, contribution, comment, cancelled) {
        this.id=id || Math.floor((Math.random() * 10000000000) + 1000000000);
        this.name = name || "";
        this.contribution = contribution || "";
        this.comment=comment || "";
        this.cancelled=cancelled || false;
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