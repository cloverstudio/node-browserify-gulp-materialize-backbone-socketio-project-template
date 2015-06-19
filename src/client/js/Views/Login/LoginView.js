var U = require('../../libs/utils.js');
var LoginUserManager = require('../../libs/loginUserManager.js');
var Backbone = require('backbone');
var template = require('./Login.hbs');
var _ = require('lodash');

var LoginView = Backbone.View.extend({
    
    el : null,
    
    initialize: function(options) {
        this.el = options.el;
        this.render();
    },

    render: function() {
	    
        $(this.el).html(template());
        
        this.onLoad();
        
        return this;

    },
    
    onLoad: function(){
        
        var self = this;
        
        $('#btn_enter').on('click',function(){

            if(self.validate()){
                
                var name = $('#input-name').val();
                var avatar = $('#input-avatarurl').val();
                var room = $('#input-room').val();


                LoginUserManager.setLoginUser(name,avatar,room);
                U.goPage('main');
                
            }    
            
        });
        
    },
    
    validate: function(){
        
        var name = $('#input-name').val();
        var avatar = $('#input-avatarurl').val();
        var room = $('#input-room').val();
        
        var result = true;
        
        $('input').removeClass('invalid');
        $('input').removeClass('valid');
        $('.form-error-label').text("");
        
        if(_.isEmpty(name)){
            
            result = false;
            
            $('#input-field-name .form-error-label').text("Please input name");
            $('#input-name').addClass('invalid');
        } else {
            $('#input-name').addClass('valid');
        }

        if(_.isEmpty(room)){
            
            result = false;
            
            $('#input-field-room .form-error-label').text("Please input room name");
            $('#input-room').addClass('invalid');
        } else {
            $('#input-room').addClass('valid');
        }

        return result;
        
    }
    
});

module.exports = LoginView;