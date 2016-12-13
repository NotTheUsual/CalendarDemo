(function() {
  'use strict';
  
  angular.module('calendar.controllers')
    .controller('DateController', DateController);
  
  /* @ngInject */
  function DateController($scope, $state, $stateParams, CalendarDate) {
    $scope.day = fetchDay();
    $scope.newAppointment = null;

    $scope.edit            = edit;
    $scope.delete          = deleteAppointment;
    $scope.cancelEdit      = stopEditing;
    $scope.saveAppointment = saveAppointment;
    $scope.close           = close;

    //////////////

    function fetchDay() {
      var year = $stateParams.year,
          month = $stateParams.month,
          date = $stateParams.date;
      return CalendarDate.from(new Date(year, month, date), date);
    }

    function edit() {
      $scope.newAppointment = {text: angular.copy($scope.day.appointment)};
    }

    function deleteAppointment() {
      $scope.day.appointment = null;
      CalendarDate.save($scope.day);
    }

    function stopEditing() {
      $scope.newAppointment = null; 
    }

    function saveAppointment(text) {
      $scope.day.appointment = text;
      CalendarDate.save($scope.day);
      stopEditing();
    }

    function close() {
      $state.go('month');
    }
  }
})();
