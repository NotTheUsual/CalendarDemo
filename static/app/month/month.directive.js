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
  function MonthController($scope, months) {
    $scope.month = currentMonthInfo();
    $scope.focussedDay = null;

    $scope.showDay = showDay;
    $scope.hideDay = hideDay;
    $scope.saveDay = saveDay;

    /////////////////////

    function currentMonthInfo() {
      var now = new Date();
      return months.infoAbout(now);
    }

    function showDay(day) {
      if (day.isInPast) return;
      $scope.focussedDay = day;
    }

    function hideDay() {
      $scope.focussedDay = null;
    }

    function saveDay(day) {
      console.log('saving', day.appointment);
      hideDay();
    }
  }
})();
