var APP = window.APP || {};

(function() {
  APP.Views = APP.Views || {};

  APP.Views.NavSidebar = Backbone.View.extend({
    initialize: function(config) {
      this.model.on('change:navOpen', function(model, isOpen) {
        if (isOpen) { this.show(); }
        else { this.hide(); }
      }.bind(this));
    },

    show: function() {
      this.$el
        .animate({ 'left': '0'})
        .addClass('shown');

      $('body').one('touchstart click', function(e) {
        this.model.set('navOpen', false);
      }.bind(this));
    },

    hide: function() {
      this.$el
        .animate({ 'left': '-20%'})
        .removeClass('shown');
    }
  });

  var SidebarButtonView = Backbone.View.extend({
    respondToContact: function() {

    },

    beSelected: function() {

    },

    beUnselected: function() {

    }
  });

})();
