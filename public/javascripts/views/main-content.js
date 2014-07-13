var APP = window.APP || {};

(function() {
  APP.Views = APP.Views || {};

  APP.Views.MainContent = Backbone.View.extend({
    initialize: function(config) {
      var navOpenCloseHandler = function(model, isOpen, options) {
        if (isOpen) { this.makeRoomForNav(); } 
        else { this.takeBackRoomFromNav(); }
      }.bind(this);

      this.model.on('change:navOpen', navOpenCloseHandler);
    },
    makeRoomForNav: function() {
      var anim = {};
      anim[this.model.get('navPosition')] = '20%';
      this.$el.animate(anim);
    },
    takeBackRoomFromNav: function() {
      var anim = {};
      anim[this.model.get('navPosition')] = '0';      
      this.$el.animate(anim);
    }
  });

})();
