describe('CalendarDate', function() {
  var CalendarDate;

  beforeEach(module('calendar.services'));

  beforeEach(inject(function(_CalendarDate_) {
    CalendarDate = _CalendarDate_;

    window.localStorage.clear();
  }));

  it('can create a CalendarDate from a month and date', function() {
    var month = new Date(2016, 5, 1);
    var date  = 3;

    var calDate = CalendarDate.from(month, date);
    expect(calDate.date).toEqual(3);
    expect(calDate.weekday).toEqual('Friday');
    expect(calDate.month).toEqual(5);
    expect(calDate.monthName).toEqual('June');
    expect(calDate.year).toEqual(2016);
    expect(calDate.appointment).toEqual(null);
  });

  it('can flag dates in the past', function() {
    var month = new Date(2016, 5, 1);
    var date = 3;
    var calDate = CalendarDate.from(month, date);
    expect(calDate.isInPast).toEqual(true);
  });

  it('can flag dates in the future as not in the past', function() {
    var nextYear = (new Date()).getFullYear() + 1;
    var month = new Date(nextYear, 5, 1);
    var date = 3;
    var calDate = CalendarDate.from(month, date);
    expect(calDate.isInPast).toEqual(false);
  });

  it('can flag today as not in the past', function() {
    var today = new Date();
    var date = today.getDate();
    var calDate = CalendarDate.from(today, date);
    expect(calDate.isInPast).toEqual(false);
  });

  it('can save an appointment for a date', function() {
    var date = {year: 2016, month: 5, date: 2, appointment: 'Health'};
    CalendarDate.save(date);
    expect(localStorage['2016/5/2']).toEqual('Health');
  });

  it('can save a date with no appointment', function() {
    var date = {year: 2016, month: 5, date: 2, appointment: null};
    CalendarDate.save(date);
    expect(localStorage['2016/5/2']).toBeUndefined();
  });

  it('can clear an appointment from a date', function() {
    var date = {year: 2016, month: 5, date: 2, appointment: null};
    localStorage.setItem('2016/5/2', 'Outdated');
    CalendarDate.save(date);
    expect(localStorage['2016/5/2']).toBeUndefined();
  });

  it('can restore a previously set appointment on load', function() {
    localStorage.setItem('2016/5/2', 'Physio');
    var month = new Date(2016, 5, 1);
    var date = 2;
    var calDate = CalendarDate.from(month, date);
    expect(calDate.appointment).toEqual('Physio');
  });

  afterEach(function() {
    window.localStorage.clear();
  });
});