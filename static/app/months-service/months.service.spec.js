describe('months', function() {
  var months;

  beforeEach(module('calendar.services'));

  beforeEach(inject(function(_months_) {
    months = _months_;
  }));

  it('can get information on a given month', function() {
    var june = new Date(2016, 5);
    var juneInfo = months.infoAbout(june);
    expect(juneInfo.days).toEqual(30);
    expect(juneInfo.name).toEqual('June');
    expect(juneInfo.startDay).toEqual(3);
  });
});
