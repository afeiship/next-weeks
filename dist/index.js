/*!
 * name: @jswork/next-weeks
 * description: Weeks for next.
 * homepage: https://github.com/afeiship/next-weeks
 * version: 1.0.4
 * date: 2021-01-09 16:25:26
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NUMBER = 'number';
  var DATABASE = {
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    shorty: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    emoji: ['😝', '😪', '😭', '🤪', '🤣', '😎', '😂'],
    cn: ['一', '二', '三', '四', '五', '六', '日']
  };

  var NxWeeks = nx.declare('nx.Weeks', {
    statics: {
      at: function (inIndex, inType) {
        return DATABASE[inType][inIndex];
      },
      day: function (inDay, inType) {
        var day = typeof inDay === NUMBER ? inDay : inDay.getDay();
        var idx = day - 1;
        idx = idx >= 0 ? idx : 6;
        return this.at(idx, inType);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeeks;
  }
})();
