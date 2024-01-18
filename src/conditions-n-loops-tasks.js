/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }

  if (a === b && c < a + b) {
    return true;
  }

  if (a === c && b < a + c) {
    return true;
  }

  if (c === b && a < c + b) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let numCopy = num;

  let romanized = '';

  for (let index = 0; index < decimalValue.length; index += 1) {
    while (decimalValue[index] <= numCopy) {
      romanized += romanNumeral[index];
      numCopy -= decimalValue[index];
    }
  }

  return romanized;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) {
      result += ' ';
    }
    switch (numberStr[i]) {
      case '-': {
        result += 'minus';
        break;
      }
      case '.': {
        result += 'point';
        break;
      }
      case ',': {
        result += 'point';
        break;
      }
      case '0': {
        result += 'zero';
        break;
      }
      case '1': {
        result += 'one';
        break;
      }
      case '2': {
        result += 'two';
        break;
      }
      case '3': {
        result += 'three';
        break;
      }
      case '4': {
        result += 'four';
        break;
      }
      case '5': {
        result += 'five';
        break;
      }
      case '6': {
        result += 'six';
        break;
      }
      case '7': {
        result += 'seven';
        break;
      }
      case '8': {
        result += 'eight';
        break;
      }
      case '9': {
        result += 'nine';
        break;
      }
      default: {
        break;
      }
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }

  return str === result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numCopy = num;

  while (numCopy >= 1) {
    if (numCopy % 10 === digit) {
      return true;
    }

    numCopy = Math.floor(numCopy / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let total = 0;
  let sumLeft = 0;

  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    total -= arr[i];
    if (sumLeft === total) {
      return i;
    }
    sumLeft += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let row = 0;
  let col = 0;
  let rowEnd = size - 1;
  let colEnd = size - 1;
  let counter = 1;
  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      if (typeof arr[row] === 'undefined') {
        arr[row] = [];
      }
      arr[row][i] = counter;
      counter += 1;
    }
    row += 1;

    for (let i = row; i <= rowEnd; i += 1) {
      if (typeof arr[i] === 'undefined') {
        arr[i] = [];
      }
      arr[i][colEnd] = counter;
      counter += 1;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= col; i -= 1) {
      if (typeof arr[rowEnd] === 'undefined') {
        arr[rowEnd] = [];
      }
      arr[rowEnd][i] = counter;
      counter += 1;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= row; i -= 1) {
      if (typeof arr[i] === 'undefined') {
        arr[i] = [];
      }
      arr[i][col] = counter;
      counter += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const squareMatrix = matrix;
  let left = 0;
  let right = squareMatrix.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i += 1) {
      const top = left;
      const bottom = right;
      const topLeft = squareMatrix[top][left + i];
      squareMatrix[top][left + i] = squareMatrix[bottom - i][left];
      squareMatrix[bottom - i][left] = squareMatrix[bottom][right - i];
      squareMatrix[bottom][right - i] = squareMatrix[top + i][right];
      squareMatrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
  return squareMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function heapify(arr1, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    const arr1Copy = arr1;

    if (left < n && arr1Copy[left] > arr1Copy[largest]) {
      largest = left;
    }

    if (right < n && arr1Copy[right] > arr1Copy[largest]) {
      largest = right;
    }

    if (largest !== i) {
      const swap = arr1Copy[i];
      arr1Copy[i] = arr1Copy[largest];
      arr1Copy[largest] = swap;

      heapify(arr1Copy, n, largest);
    }
  }

  const n = arr.length;
  const arrCopy = arr;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1) {
    heapify(arrCopy, n, i);
  }

  for (let i = n - 1; i >= 0; i -= 1) {
    const swap = arrCopy[0];
    arrCopy[0] = arrCopy[i];
    arrCopy[i] = swap;

    heapify(arrCopy, i, 0);
  }

  return arrCopy;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const { length } = str;
  let strCopy = str;

  for (let i = 0; i < iterations; i += 1) {
    let result = '';

    for (let j = 0; j < length; j += 2) {
      result += strCopy[j];
    }

    for (let j = 1; j < length; j += 2) {
      result += strCopy[j];
    }

    strCopy = result;
  }

  return strCopy;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} num The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(num) {
  const digits = [];

  let remainder = num;
  while (remainder > 0) {
    digits.unshift(remainder % 10);
    remainder = Math.floor(remainder / 10);
  }

  let pivotIndex = -1;
  for (let i = digits.length - 1; i > 0; i -= 1) {
    if (digits[i] > digits[i - 1]) {
      pivotIndex = i - 1;
      break;
    }
  }

  if (pivotIndex === -1) {
    return num;
  }

  let swapIndex = pivotIndex + 1;
  for (let i = pivotIndex + 2; i < digits.length; i += 1) {
    if (digits[i] > digits[pivotIndex] && digits[i] < digits[swapIndex]) {
      swapIndex = i;
    }
  }

  const temp = digits[pivotIndex];
  digits[pivotIndex] = digits[swapIndex];
  digits[swapIndex] = temp;

  const sortedDigits = digits.splice(pivotIndex + 1).sort();

  return Number(`${digits.join('')}${sortedDigits.join('')}`);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
