(function() {
  'use strict';
  
  angular.module('calendar.controllers')
    .controller('DateController', DateController);
  
  /* @ngInject */
  function DateController($scope, $state, $stateParams, CalendarDate) {
    $scope.day = fetchDay();

    $scope.close = close;

    //////////////

    function fetchDay() {
      var year = $stateParams.year,
          month = $stateParams.month,
          date = $stateParams.date;
      return CalendarDate.from(new Date(year, month, date), date);
    }

    function close() {
      $state.go('month');
    }
  }
})();
