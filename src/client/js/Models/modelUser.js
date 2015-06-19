var Backbone = require('backbone');

(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    var ModelUser = Backbone.Model.extend({
        defaults: {
            id: 0,
            name: "Not specified",
            avatarURL: "Not specified"
        },
        initialize: function(){
    
        }
    });

    // Header -----------------------------------------------

    // Implementation ---------------------------------------

    // Exports ----------------------------------------------
    module["exports"] = ModelUser;

})((this || 0).self || global);
