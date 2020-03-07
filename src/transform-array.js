module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error();

  let transformedArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        transformedArr.pop();
        break;
      case '--double-next':
        if (i + 1 <= arr.length - 1) transformedArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i > 0) transformedArr.push(arr[i - 1]);
        break;
      default:
        transformedArr.push(arr[i]);
        break;
    }
  }

  return transformedArr;
};
