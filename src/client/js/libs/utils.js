(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    function Utils() {
    };

    // Header -----------------------------------------------
    Utils.prototype.l = logging; 
    Utils.prototype.goPage = goPage;

    // Implementation ---------------------------------------
    function logging(obj) {
        console.log(obj);
    }

    function goPage(pageName) {
        document.location.href = "#" + pageName;
    }

    // Exports ----------------------------------------------
    module["exports"] = new Utils();

})((this || 0).self || global);