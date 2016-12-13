describe('months', function() {
  var months;

  beforeEach(module('calendar.services'));

  beforeEach(inject(function(_months_) {
    months = _months_;
  }));

  it('can get information on a given month', function() {
    var june = new Date(2016, 5);
    var juneInfo = months.infoAbout(june);
    expect(juneInfo.name).toEqual('June');
    expect(juneInfo.startDay).toEqual(3);
  });

  it('can get days in the given month', function() {
    var june = new Date(2016, 5);
    var juneInfo = months.infoAbout(june);

    juneInfo.days.forEach(function(day, index) {
      expect(day.year).toEqual(2016);
      expect(day.month).toEqual(5);
      expect(day.monthName).toEqual('June');
      expect(day.date).toEqual(index + 1);
    });
  });
});
