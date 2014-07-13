var APP = window.APP || {};

(function(APP) {
  APP = _.extend(APP, {
    state: new Backbone.Model({
      navOpen: false,
      navPosition: 'left',
      footerAvailable: true,
      footerTakeover: false
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
        }),
        mainFooter: new this.Views.MainFooter({
          el: '#mobile-footer',
          model: this.state
        }),
      };

      this.bindMobileNavActions();
    },

    bindMobileNavActions: function() {
      $('.nav-toggle').bind('click touchstart', function(e) {
        e.stopPropagation();
        this.state.set('navOpen', !this.state.get('navOpen'));
      }.bind(this));
    }

  });

  $(document).ready(function() {
    APP.init();
  });

})(APP);
