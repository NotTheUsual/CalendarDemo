(function() {
  'use strict';

  angular
    .module('calendar', [
      'ui.router',
      'calendar.templates',
      'calendar.controllers',
      'calendar.services',
      'calendar.directives'
    ])

    /* @ngInject */
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('month', {
        url: '/',
        templateUrl: 'app/root/root.controller.html',
        controller: 'RootController'
      });

      $urlRouterProvider.otherwise('/');
    });
})();
