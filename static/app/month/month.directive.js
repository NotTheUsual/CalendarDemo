(function() {
  'use strict';

  angular.module('calendar.directives')
    .directive('month', Month);

  function Month() {
    return {
      templateUrl: 'static/app/month/month.directive.html',
      controller: MonthController
    };
  }

  /* @ngInject */
  function MonthController($scope, $state, months) {
    $scope.month = currentMonthInfo();

    $scope.showDay = showDay;

    /////////////////////

    function currentMonthInfo() {
      var now = new Date();
      return months.infoAbout(now);
    }

    function showDay(day) {
      if (day.isInPast) return;
      $state.go('date', {year: day.year, month: day.month, date: day.date});
    }
  }
})();
