(function() {
  'use strict';

  angular
    .module('calendar', [
      'ui.router',
      'calendar.templates',
      'calendar.controllers',
      'calendar.directives'
    ])

    /* @ngInject */
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('month', {
        url: '/',
        templateUrl: 'static/app/root/root.controller.html',
        controller: 'RootController'
      });

      $urlRouterProvider.otherwise('/');
    });
})();
