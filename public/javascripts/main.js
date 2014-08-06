var APP = window.APP || {};

(function(APP) {
  APP = _.extend(APP, {
    state: new Backbone.Model({
      navOpen: false,
      navPosition: 'left',
      navType: 'link', // link, toggle, radio
      footerAvailable: false,
      footerTakeover: false,
      canvasHeader: Modernizr.canvas
    }),

    init: function() {
      var Views = this.Views,
          viewConfig = function(selector) {
            return { el: selector, model: this.state };
          }.bind(this);

      this.activeViews = {
        nav: new Views.NavSidebar(viewConfig('#nav-container')),
        mainContent: new Views.MainContent(viewConfig('#main-content')),
        mainHeader: new Views.MainHeader(viewConfig('#mobile-header')),
        mainFooter: new Views.MainFooter(viewConfig('#mobile-footer'))
      };

      this.bindNavAction();
      // this.state.set('footerAvailable', false);
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
