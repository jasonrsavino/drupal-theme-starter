// JS should be wrapped in Drupal behaviors and use .once.
// See https://www.drupal.org/docs/8/api/javascript-api/javascript-api-overview
(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      $('input.myCustomBehavior', context).once('myCustomBehavior').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.
      });
    }
  };
})(jQuery, Drupal);