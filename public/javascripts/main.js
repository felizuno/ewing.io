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
      var Views = this.Views,
          viewConfig = function(selector) {
            return { el: selector, model: this.state };
          }.bind(this);

      this.activeViews = {
        nav: new Views.NavSidebar(viewConfig('#nav-container')),
        mainContent: new Views.MainContent(viewConfig('#main-content')),
        mainFooter: new Views.MainFooter(viewConfig('#footer')),
      };

      this.bindNavAction();
    },

    bindNavAction: function() {
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
