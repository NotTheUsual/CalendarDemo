(function() {
  'use strict';

  angular.module('calendar.services')
    .service('CalendarDate', CalendarDate);

  /* @ngInject */
  function CalendarDate() {
    var MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    this.from = from;
    this.save = save;

    ////////////////

    function from(month, date) {
      var dateObject = new Date(month.getFullYear(), month.getMonth(), date);
      var calendarDate = {
        _dateObject: dateObject,
        date: date,
        weekday: DAYS[dateObject.getDay()],
        month: month.getMonth(),
        monthName: MONTHS[month.getMonth()],
        year: month.getFullYear(),
        isInPast: isInPast(dateObject)
      };
      var key = appointmentKeyFor(calendarDate);
      calendarDate.appointment = localStorage.getItem(key) || null;

      return calendarDate;
    }

    function save(date) {
      if (!date.appointment) return;
      var key = appointmentKeyFor(date);
      localStorage.setItem(key, date.appointment);
    }
  }

  function appointmentKeyFor(date) {
    return '' + date.year + '/' + date.month + '/' + date.date;
  }

  function isInPast(date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }
})();
