type WeekType = 'en' | 'cn' | 'shorty' | 'emoji';
type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type WeekIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface NxStatic {
  Weeks: {
    at: (index: WeekIndex | number, type: WeekType) => string;
    day: (target: WeekDay | number | Date, type: WeekType) => string;
  };
}
