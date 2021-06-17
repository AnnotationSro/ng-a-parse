// List of pre-defined converters
export type StandardModelValueConverters =
  | 'number-timestamp'
  | 'date'
  | 'string-iso-datetime-with-zone'
  | 'string-iso-datetime'
  | 'string-iso-datetime-short'
  | 'string-iso-time-with-zone'
  | 'string-iso-time'
  | 'string-iso-time-short'
  | 'string-iso-date';

// List of known angular DatePipe formats, not all are implemented, more info: https://angular.io/api/common/DatePipe#pre-defined-format-options
export type BasicDateFormat =
  | 'short'
  | 'medium'
  | 'long'
  | 'full'
  | 'shortDate'
  | 'mediumDate'
  | 'longDate'
  | 'fullDate'
  | 'shortTime'
  | 'mediumTime'
  | 'longTime'
  | 'fullTime';

// List of known DatePart formats, not all are implemented, more info: https://angular.io/api/common/DatePipe#custom-format-options
export type DatePartFormat =
  // Era name (AD/BC)
  | 'G'
  | 'GG'
  | 'GGG'
  | 'GGGG'
  | 'GGGGG'
  // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
  | 'y'
  // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
  | 'yy'
  // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
  | 'yyy'
  // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
  | 'yyyy'
  // 1 digit representation of the week-numbering year, e.g. (AD 1 => 1, AD 199 => 199)
  | 'Y'
  // 2 digit representation of the week-numbering year, padded (00-99). (e.g. AD 2001 => 01, AD
  // 2010 => 10)
  | 'YY'
  // 3 digit representation of the week-numbering year, padded (000-999). (e.g. AD 1 => 001, AD
  // 2010 => 2010)
  | 'YYY'
  | 'YYYY'
  // Month of the year (1-12), numeric
  | 'M'
  | 'L'
  | 'MM'
  | 'LL'
  // Month of the year (January, ...), string, format
  | 'MMM'
  | 'MMMM'
  | 'MMMMM'
  // Month of the year (January, ...), string, standalone
  | 'LLL'
  | 'LLLL'
  | 'LLLLL'
  // Week of the year (1, ... 52)
  | 'w'
  | 'ww'
  // Week of the month (1, ...)
  | 'W'
  // Day of the month (1-31)
  | 'd'
  | 'dd'
  // Day of the Week
  | 'E'
  | 'EE'
  | 'EEE'
  | 'EEEE'
  | 'EEEEE'
  | 'EEEEEE'
  // Generic period of the day (am-pm)
  | 'a'
  | 'aa'
  | 'aaa'
  | 'aaaa'
  | 'aaaaa'
  // Extended period of the day (midnight, at night, ...), standalone
  | 'b'
  | 'bb'
  | 'bbb'
  | 'bbbb'
  | 'bbbbb'
  // Extended period of the day (midnight, night, ...), standalone
  | 'B'
  | 'BB'
  | 'BBB'
  | 'BBBB'
  | 'BBBBB'
  // Hour in AM/PM, (1-12)
  | 'h'
  | 'hh'
  // Hour of the day (0-23)
  | 'H'
  | 'HH'
  // Minute of the hour (0-59)
  | 'm'
  | 'mm'
  // Second of the minute (0-59)
  | 's'
  | 'ss'
  // Fractional second
  | 'S'
  | 'SS'
  | 'SSS'
  // Timezone ISO8601 short format (-0430)
  | 'Z'
  | 'ZZ'
  | 'ZZZ'
  // Timezone ISO8601 extended format (-0430)
  | 'ZZZZZ'
  // Timezone GMT short format (GMT+4)
  | 'O'
  | 'OO'
  | 'OOO'
  | 'z'
  | 'zz'
  | 'zzz'
  // Timezone GMT long format (GMT+0430)
  | 'OOOO'
  | 'ZZZZ'
  | 'zzzz';

export enum DateType {
  FullYear,
  Month,
  Date,
  Hours_24,
  Hours_12,
  Minutes,
  Seconds,
  FractionalSeconds,
  DayOfWeek,
  DayPeriods,
  Eras,
  TimeZoneOffset,
}
