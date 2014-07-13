var APP = window.APP || {};

(function() {
  APP.Views = APP.Views || {};

  // Kevin don't forget to use new NavSidebar()
  APP.Views.NavSidebar = Backbone.View.extend({
    initialize: function(config) {
      var self = this;

      this.model.on('change:navOpen', function(model, isOpen, options) {
        if (isOpen) {
          self.show();
        } else {
          self.hide();
        }
      });
    },

    show: function() {
      var left = '0',
          $content = $('#mobile-main-content'), // todo: pass in
          moved = $content.hasClass('moved'), // todo: attribute of content
          left2 = (moved) ? '0' : '20%';

      this.$el
        .animate({ 'left': left})
        .addClass('shown');

      $content // todo: content.makeRoomForNav()
        .animate({ 'left': left2})
        .toggleClass('moved', !moved);

      $('body').one(events, this.hide.bind(this));
    },

    hide: function() {
      var left = '-20%',
          $content = $('#mobile-main-content'), // todo
          moved = $content.hasClass('moved'), // todo
          left2 = (moved) ? '0' : '20%';

      this.$el
        .animate({ 'left': left})
        .removeClass('shown');

      $content // content.takeUpFullScreen();
        .animate({ 'left': left2})
        .toggleClass('moved', !moved);
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