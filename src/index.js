import nx from '@jswork/next';

const NUMBER = 'number';
const DATABASE = {
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  shorty: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  emoji: ['😝', '😪', '😭', '🤪', '🤣', '😎', '😂'],
  cn: ['一', '二', '三', '四', '五', '六', '日']
};

const NxWeeks = nx.declare('nx.Weeks', {
  statics: {
    at: function(inIndex, inType) {
      return DATABASE[inType][inIndex];
    },
    day: function(inDay, inType) {
      var day = typeof inDay === NUMBER ? inDay : inDay.getDay();
      var idx = day - 1;
      idx = idx >= 0 ? idx : 6;
      return this.at(idx, inType);
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxWeeks;
}

export default NxWeeks;
