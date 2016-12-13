(function() {
  'use strict';

  angular.module('calendar.services')
    .service('CalendarDate', CalendarDate);

  /* @ngInject */
  function CalendarDate() {
    var MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    this.from = from;

    ////////////////

    function from(month, date) {
      var dateObject = new Date(month.getFullYear(), month.getMonth(), date);
      return {
        _dateObject: dateObject,
        date: date,
        weekday: DAYS[dateObject.getDay()],
        month: month.getMonth(),
        monthName: MONTHS[month.getMonth()],
        year: month.getFullYear(),
        appointment: null,
        isInPast: isInPast(dateObject)
      };
    }
  }

  function isInPast(date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }
})();
