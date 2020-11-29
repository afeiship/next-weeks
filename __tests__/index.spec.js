(function () {
  const NxWeeks = require('../src');

  describe('NxWeeks.methods', function () {
    test('api:at en should return en', () => {
      expect(NxWeeks.at(0, 'en')).toBe('Monday');
      expect(NxWeeks.at(1, 'en')).toBe('Tuesday');
      expect(NxWeeks.at(2, 'en')).toBe('Wednesday');
      expect(NxWeeks.at(3, 'en')).toBe('Thursday');
      expect(NxWeeks.at(4, 'en')).toBe('Friday');
      expect(NxWeeks.at(5, 'en')).toBe('Saturday');
      expect(NxWeeks.at(6, 'en')).toBe('Sunday');
    });

    test('api:day en should get by date.getDay()', () => {
      const d1 = new Date('2020-11-23');
      const d2 = new Date('2020-11-24');
      const d3 = new Date('2020-11-25');
      const d4 = new Date('2020-11-26');
      const d5 = new Date('2020-11-27');
      const d6 = new Date('2020-11-28');
      const d7 = new Date('2020-11-29');
      expect(NxWeeks.day(d1.getDay(), 'cn')).toBe('一');
      expect(NxWeeks.day(d2.getDay(), 'cn')).toBe('二');
      expect(NxWeeks.day(d3.getDay(), 'cn')).toBe('三');
      expect(NxWeeks.day(d4, 'cn')).toBe('四');
      expect(NxWeeks.day(d5, 'cn')).toBe('五');
      expect(NxWeeks.day(d6, 'cn')).toBe('六');
      expect(NxWeeks.day(d7, 'cn')).toBe('日');
    });
  });
})();
