# Welcome to @annotation/ng-parse 👋
[![Version](https://img.shields.io/npm/v/@annotation/ng-parse.svg)](https://www.npmjs.com/package/@annotation/ng-parse)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Angular parsers

### 🏠 [Homepage](https://github.com/AnnotationSro/ng-a-parse)

## Install

```sh
yarn add @annotation/ng-parse
## OR ##
npm install @annotation/ng-parse --save
```

## API

### Date parser

| function | parameters | return value | description |
| --- | --- | --- | --- |
| parseDate | `value: string, format: BasicDateFormat OR string, locale: string, oldValue ?: Date` | `Date` | Formats `value` in defined `format` and `locale` and returns `Date` 
| getDateFormatParser | `locale: string, format: BasicDateFormat OR string` | `DateParser` | Returns prepared `DateParser` capable to manually parse given string with `DateFormat.parseDate(value, oldValue)` method. Also contains `DateType[]` which helps to identify what parts are in `format`. 
| toDate | `value: string OR Date Or number` | `Date` | Returns `Date` from `Date`, `number` (timestamp) or `ISO string` (yyyy-MM-ddTHH:mm:ss:sss) 


#### Examples for date parser functions
* parseDate
```typescript
const date: Date = parseDate('01.01.2021', 'dd.MM.yyyy', 'sk')
```

* getDateFormatParser

```typescript
const parser: DateParser = getDateFormatParser('sk', 'dd.MM.yyyy');
const date: Date = parser.parseDate('01.01.2021');
const parts: DateType[] = parser.types;

const hasYear = parts.includes(DateType.FullYear); // true
const hasMinutes = parts.includes(DateType.Minutes) // false
```
* parseDate
```typescript
const dateFromMs: Date = toDate(1623926493809);
const dateFromDate: Date = toDate(new Date()); 
const dateFromISO8601_1: Date = toDate('2021-06-16T23:54:08+00:00'); 
const dateFromISO8601_2: Date = toDate('2021-06-16T23:54:08Z'); 
```

#### Types for date parsers
| type/interface | definition |
| --- | --- |
| `DateType` | `FullYear,Month,Date,Hours_24,Hours_12,Minutes,Seconds,FractionalSeconds,DayOfWeek,DayPeriods,Eras,TimeZoneOffset`
| `BasicDateFormat` | `short', 'medium', 'long', 'full', 'shortDate', 'mediumDate', 'longDate', 'fullDate', 'shortTime', 'mediumTime', 'longTime', 'fullTime'`
| `DatePartFormat` | see https://angular.io/api/common/DatePipe#custom-format-options
| `DateParser` | `errorMsg: string, types: DateType[], parseDate: (text: string, oldValue?: Date) => Date`
## Authors

👤 **Pavol Slany**

* Website: www.annotation.sk
* Github: [@slany](https://github.com/slany)

👤 **Martin Filo**

* Website: www.annotation.sk
* Github: [@Chiff](https://github.com/Chiff)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
