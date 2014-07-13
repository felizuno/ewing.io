var APP = window.APP || {};

(function(APP) {
  APP = _.extend(APP, {
    state: new Backbone.Model({
      navOpen: false,
      navPosition: 'left'
    }),

    init: function() {
      this.views = {
        nav: new this.Views.NavSidebar({
          el: '#mobile-sidebar',
          model: this.state
        }),
        mainContent: new this.Views.MainContent({
          el: '#mobile-main-content',
          model: this.state
        })
      };

      this.bindMobileNavActions();
    },

    bindMobileNavActions: function() {
      var events = 'touchstart click',
          state = this.state;

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
        state.set('navOpen', !state.get('navOpen'));
      });
    }

  });

  $(document).ready(function() {
    APP.init();
  });

})(APP);