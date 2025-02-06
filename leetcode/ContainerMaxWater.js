'use strict';

function maxArea(height) {
  let left = 0,
    right = height.length - 1;
  let maxArea = -1;

  let calcArea;

  while (left < right) {
    calcArea = (right - left) * Math.min(height[left], height[right]);
    if (calcArea > maxArea) maxArea = calcArea;

    //shifting
    if (height[left] <= height[right]) left++;
    else right--;
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
