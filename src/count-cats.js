module.exports = function countCats(backyard) {
  let cats = 0;

  backyard.forEach(arr =>
    arr.forEach(arrElem => {
      if (arrElem == '^^') cats++
    }));

  return cats;
};