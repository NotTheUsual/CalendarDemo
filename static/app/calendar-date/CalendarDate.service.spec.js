describe('CalendarDate', function() {
  var CalendarDate;

  beforeEach(module('calendar.services'));

  beforeEach(inject(function(_CalendarDate_) {
    CalendarDate = _CalendarDate_;
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
});