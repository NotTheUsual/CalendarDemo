(function() {
  'use strict';
  angular
    .module('calendar', [
      'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('month', {
        url: '/',
        template: '<p>December</p>'
      });

      $urlRouterProvider.otherwise('/');
    });
})();
