var APP = window.APP || {};

(function(APP) {

  APP = {
    init: function() {
      this.bindMobileNavActions();
    },
    bindMobileNavActions: function() {
      $('#mobile-footer').click(function() {
        var $el = $(this),
            shown = $el.hasClass('shown'),
            top = (shown) ? '90%' : '0';

        $el
          .animate({ 'top': top })
          .toggleClass('shown', !shown);
      });

      $('.nav-toggle').click(function() {
        console.log('click');
        var $el = $('#mobile-sidebar'),
            shown = $el.hasClass('shown'),
            left = (shown) ? '-30%' : '0',
            $content = $('#mobile-main-content'),
            moved = $content.hasClass('moved'),
            left2 = (moved) ? '0' : '30%';

        $el
          .animate({ 'left': left})
          .toggleClass('shown', !shown);

        $content
          .animate({ 'left': left2})
          .toggleClass('moved', !moved);
      });
    }

  };

  $(document).ready(function() {
    APP.init();
  });

})(APP);