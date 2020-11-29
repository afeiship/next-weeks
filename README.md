# next-weeks
> Weeks for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-weeks
```

## apis
| api | params        | description                                    |
| --- | ------------- | ---------------------------------------------- |
| at  | (index, type) | Get en/cn/emoji by index(0-6).                 |
| day | (day, type)   | Get en/cn/emoji by js date day.(1,2,3,4,5,6,0) |

## usage
```js
import NxWeeks from '@jswork/next-weeks';

// at:
NxWeeks.at(0, 'en')   // 'Monday'
NxWeeks.at(1, 'en')   // 'Tuesday'
NxWeeks.at(2, 'en')   // 'Wednesday'
NxWeeks.at(3, 'en')   // 'Thursday'
NxWeeks.at(4, 'en')   // 'Friday'
NxWeeks.at(5, 'en')   // 'Saturday'
NxWeeks.at(6, 'en')   // 'Sunday'


// day:
const d1 = new Date('2020-11-23');
const d2 = new Date('2020-11-24');
const d3 = new Date('2020-11-25');
const d4 = new Date('2020-11-26');
const d5 = new Date('2020-11-27');
const d6 = new Date('2020-11-28');
const d7 = new Date('2020-11-29');

NxWeeks.day(d1.getDay(), 'cn')  // '一'
NxWeeks.day(d2.getDay(), 'cn')  // '二'
NxWeeks.day(d3.getDay(), 'cn')  // '三'
NxWeeks.day(d4.getDay(), 'cn')  // '四'
NxWeeks.day(d5.getDay(), 'cn')  // '五'
NxWeeks.day(d6.getDay(), 'cn')  // '六'
NxWeeks.day(d7.getDay(), 'cn')  // '日'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-weeks/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-weeks
[version-url]: https://npmjs.org/package/@jswork/next-weeks

[license-image]: https://img.shields.io/npm/l/@jswork/next-weeks
[license-url]: https://github.com/afeiship/next-weeks/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-weeks
[size-url]: https://github.com/afeiship/next-weeks/blob/master/dist/next-weeks.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-weeks
[download-url]: https://www.npmjs.com/package/@jswork/next-weeks
