var ModelUser = require('../Models/modelUser.js');


(function(global) {
    "use strict;"

    var LoginUserManager = {
        
        user : null,
        roomId : null,
        
        setLoginUser: function(name,avaterURL,roomID){
            
            this.user = new ModelUser({
                name:name,
                avatarURL:avaterURL
            });
            
            this.roomID = roomID;
            
        }
            
    };

    // Exports ----------------------------------------------
    module["exports"] = LoginUserManager;

})((this || 0).self || global);