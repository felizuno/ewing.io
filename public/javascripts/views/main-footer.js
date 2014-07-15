var APP = window.APP || {};

(function() {
  APP.Views = APP.Views || {};

  APP.Views.MainFooter = Backbone.View.extend({
    events: {
      'click'       : 'toggleTakeover',
      'touchstart'  : 'toggleTakeover'
    },

    initialize: function(config) {
      this.model.on('change:footerTakeover', function(model, shouldTakeOver) {
        if (shouldTakeOver) { this.takeOverScreen(); }
        else { this.surrenderScreen(); }
      }.bind(this));
    },

    toggleTakeover: function() {
      this.model.set('footerTakeover', !this.model.get('footerTakeover'));
    },

    takeOverScreen: function() {
      this.$el.animate({ 'top': '0'});
    },

    surrenderScreen: function() {
      this.$el.animate({ 'top':  '90%'});
    }
  });

})();
