// import libraries
var $ = require('jquery-browserify');
var Backbone = require('backbone');
Backbone.$ = $;
var U = require('./libs/utils.js');
require('materialize');

var U = require('./libs/utils.js');
var Config = require('./init.js');

// setting up router
var AppRouter = Backbone.Router.extend({
    routes: {
        "login": "loginRoute",
        "*actions": "defaultRoute"
    }
});

// Initiate the router
var app_router = new AppRouter;
window.app = app_router;

app_router.on('route:defaultRoute', function(actions) {
    U.goPage('login');
});

app_router.on('route:loginRoute', function(actions) {
        
    var LoginView = require('./Views/Login/LoginView.js');
    
    $(Config.defaultContainer).attr('id','login');
    
    var view = new LoginView({
        'el': Config.defaultContainer
    });
    
});



$(function() {
    
    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    
    /*
    $('.button-collapse').sideNav();
$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    */
});



/*
$(function() {
    $('.button-collapse').sideNav();
$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});
*/

