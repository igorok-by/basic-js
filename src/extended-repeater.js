module.exports = function repeater(str, options) {

  let resultArr = [];
  let additionArr = [];

  if (options.separator === undefined) options.separator = '+';
  if (str === null) str = 'null';
  if (options.addition === null) options.addition = 'null';


  if (options.addition === undefined) {
    let count = 0;

    while (count < options.repeatTimes) {
      resultArr.push(`${str}`);
      count++;
    };
    return resultArr.join(options.separator);


  } else {
    let count = 0;

    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if (options.additionSeparator === undefined) options.additionSeparator = '|';

    while (count < options.additionRepeatTimes) {
      additionArr.push(options.addition);
      count++;
    };

    additionArr.join(options.additionSeparator);
    count = 0;

    while (count < options.repeatTimes) {
      resultArr.push(additionArr.join(options.additionSeparator));
      count++;
    };
  }

  return resultArr.map(arrElem => `${str}` + arrElem).join(options.separator);
};
  