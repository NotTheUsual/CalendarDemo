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
      var days = [];
      for (var i = 1; i <= lastDay.getDate(); i += 1) {
        days.push(new CalendarDate(month, i))
      }
      return days;
    }

    function nameOf(month) {
      return MONTHS[month.getMonth()];
    }

    function startDayOf(month) {
      var firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
      return firstDay.getDay();
    }

    function CalendarDate(month, date) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
      this._dateObject = new Date(month.getFullYear(), month.getMonth(), date);
      this.date = date;
      this.weekday = days[this._dateObject.getDay()];
      this.month = month.getMonth();
      this.monthName = nameOf(month);
      this.year = month.getFullYear();
      this.appointment = null;
    }
  }
})();
