module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, stack = []) {

    stack.push(depth);

    arr.forEach(arrElem => {
      if (Array.isArray(arrElem)) {
        this.calculateDepth(arrElem, depth + 1, stack);
      };
    });

    return Math.max(...stack);
  }
};