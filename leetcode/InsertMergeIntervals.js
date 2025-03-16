'use strict';

function insert(intervals, newInterval) {
  intervals.push(newInterval);
  return merge(intervals);
}

function merge(intervals) {
  if (intervals.length === 1) return intervals;

  intervals.sort((i1, i2) => i1[0] - i2[0]);

  let result = [];
  let inner = [intervals[0][0], intervals[0][1]];
  let interval, start, end;
  let innerEnd;

  for (let i = 1; i < intervals.length; i++) {
    interval = intervals[i];
    start = interval[0];
    end = interval[1];

    innerEnd = inner[1];

    if (innerEnd < start) {
      //no overlapping
      result.push(inner);
      inner = [start, end];
    } else {
      //overlapping
      if (end > innerEnd) {
        inner.pop();
        inner.push(end);
      }
    }
  }

  result.push(inner);

  return result;
}

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// console.log(
//   merge([
//     [1, 4],
//     [2, 3],
//   ])
// );

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
