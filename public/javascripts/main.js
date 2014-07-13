var APP = window.APP || {};

(function(APP) {
  APP = _.extend(APP, {
    state: new Backbone.Model({
      navOpen: false
    }),

    init: function() {
      this.views = {
        navSidebar: new this.Views.NavSidebar({
          el: '#mobile-sidebar',
          model: this.state
        }),
      };

      this.bindMobileNavActions();
    },

    bindMobileNavActions: function() {
      var events = 'touchstart click';

      $('#mobile-footer').bind(events, function() {
        var $el = $(this),
            shown = $el.hasClass('shown'),
            top = (shown) ? '90%' : '0';

        $el
          .animate({ 'top': top })
          .toggleClass('shown', !shown);
      });

      $('.nav-toggle').bind(events, function(e) {
        e.stopPropagation();
        APP.state.set('navOpen', !APP.state.get('navOpen'));
      });
    }

  });

  $(document).ready(function() {
    APP.init();
  });

})(APP);