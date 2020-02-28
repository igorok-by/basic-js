module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  };

  let arrName = [];

  members.map(arrElem => {
    if (typeof arrElem === 'string') {
      arrName.push(arrElem.trim()[0].toUpperCase());
    };
  });

  return arrName.sort().join('');
};