(function() {
  'use strict';
  
  angular.module('calendar.services')
    .factory('months', monthsService);
  
  /* @ngInject */
  function monthsService() {
    var MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var service = {
      infoAbout: infoAbout
    };
    
    return service;
    ///////////////

    function infoAbout(month) {
      return {
        days:     daysIn(month),
        name:     nameOf(month),
        startDay: startDayOf(month)
      };
    }

    function daysIn(month) {
      var lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      return lastDay.getDate();
    }

    function nameOf(month) {
      return MONTHS[month.getMonth()];
    }

    function startDayOf(month) {
      var firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
      return firstDay.getDay();
    }
  }
})();
