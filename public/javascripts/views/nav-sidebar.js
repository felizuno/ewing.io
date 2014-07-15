var APP = window.APP || {};

(function() {
  APP.Views = APP.Views || {};

  APP.Views.NavSidebar = Backbone.View.extend({

    initialize: function(config) {
      this.template = $('#mobile-sidebar-template').html();
      this.render();

      this.model.on('change:navOpen', function(model, isOpen) {
        if (isOpen) { this.show(); }
        else { this.hide(); }
      }.bind(this));
      
      return this;
    },

    show: function() {
      this.$el
        .animate({ 'left': '0'})
        .addClass('shown');

      $('body').one('touchstart click', function(e) {
        this.model.set('navOpen', false);
      }.bind(this));
      
      return this;
    },

    hide: function() {
      this.$el
        .animate({ 'left': '-20%'})
        .removeClass('shown');
      
      return this;
    },

    render: function() {
      this.$el.html(_.template(this.template, {}));
      return this;
    }
  });

  var SidebarButtonView = Backbone.View.extend({
    respondToContact: function() { },
    beSelected: function() { },
    beUnselected: function() { }
  });

})();
