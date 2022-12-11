# Time lib

Time lib is a class for manipulating time. Allow you to add seconds, minutes and hours to time. Also format it. (Examples 15:22:58 || 01hs:25mm || 02:56 || 2-38 || 152 52 08).

## Installation

```sh
npm install yd-time-lib
```

## Getting started with Time Lib

Here is an example of a basic app using Time Lib:

### initialize

Initialize, the constructor will receive the milliseconds as a parameter.

```ts
let time = new Time(milliseconds_from: number);
```

```js
import Time from "yd-time-lib";

//initialize time 2 minutes 43 seconds
let time = new Time(593000);
```

## Public Methods

### format

| Character | Description                     | Example returned values |
| --------- | ------------------------------- | ----------------------- |
| {s}       | Seconds with zeros to the left  | 00 through 59           |
| {i}       | Minutes with zeros to the left  | 00 to 59                |
| {h}       | Hours with zeros to the left    | 01 through 12           |
| {g}       | Hours without zeros to the left | 1 through 12           |

```ts
format = (format: string) => String;
```

```js
//initialize 00:00:20 and format
new Time(20000).format("{s} seconds"); // result "20 seconds"

//initialize 00:02:35 and format
new Time(155000).format("{i}:{s}"); // result "02:35"

//initialize 00:02:35 and format
new Time(155000).format("{h}hs:{i}mm"); // result  "02hs:02mm"
```

### adds

Adds methods allow you to add time.

```ts
addSeconds = (seconds: number) => Time;
addMinutes = (minutes: number) => Time;
addHours = (hours: number) => Time;
```

```js
//initialize 00:00:20  add 15 seconds and format
new Time(20000).addSeconds(15).format("{s} seconds"); // result "35 seconds"

//initialize 00:02:35  add 10 seconds and format
new Time(155000).addMinutes(10).format("{i}:{s}"); // 02:45

//initialize 00:02:35 add 2 hours and format
new Time(155000).addHours(2).format("{h}hs:{i}mm"); // 02hs:02mm
```

### diff

diff method allow you to subtract time. the parameter it is in milliseconds.

```ts
diff = (milliseconds: number) => Time;
```

```js
//initialize 00:00:25  subtract 12 seconds and format
new Time(25000).diff(12).format("{s} seconds"); // result "13 seconds"
```
