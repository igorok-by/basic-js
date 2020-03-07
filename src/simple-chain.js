const chainMaker = {
  resultArr: [],

  getLength() {
    return this.resultArr.length;
  },

  addLink(value) {
    this.resultArr.push(value);
    return this;
  },

  removeLink(position) {

    if ( !Number.isInteger(position) || position > this.resultArr.length - 1 || position < 1 ) {
      this.resultArr = [];
      throw Error();
    };
    
    this.resultArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.resultArr.reverse();
    return this;
  },

  finishChain() {
    const result = this.resultArr.map(arrElem => `( ${arrElem} )`).join('~~');

    this.resultArr = [];
    return result;
  }
};

module.exports = chainMaker;
