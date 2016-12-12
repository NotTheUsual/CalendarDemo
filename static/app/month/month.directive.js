(function() {
  'use strict';

  console.log('loaded');

  angular.module('calendar.directives')
    .directive('month', Month);

  function Month() {
    return {
      templateUrl: 'static/app/month/month.directive.html',
      controller: MonthController
    };
  }

  /* @ngInject */
  function MonthController($scope) {
    console.log('what???');
    $scope.now = new Date();
  }
})();
