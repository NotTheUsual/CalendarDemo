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
  function MonthController($scope, months) {
    $scope.month = currentMonthInfo();

    $scope.range = range;
    $scope.dayName = dayName;

    /////////////////////

    function currentMonthInfo() {
      var now = new Date();
      return months.infoAbout(now);
    }

    function range(max) {
      var output = [];
      for (var i = 1; i <= max; i += 1) {
        output.push(i)
      }
      return output;
    }

    function dayName(month, index) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var key = (index + month.startDay - 1) % 7;
      return days[key];
    }
  }
})();
