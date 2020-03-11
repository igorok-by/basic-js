class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  };

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    let engAlphabet = [];
    for (let i = 65; i <= 90; i++) {
      engAlphabet.push(String.fromCharCode(i));
    };

    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    while (key.length < message.length) {
      key = key.concat(key);
    };

    let encryptedText = [];

    for (let i = 0, j = 0; i < message.length; i++) {

      if ( engAlphabet.includes(message[i]) ) {
        
        encryptedText.push( String.fromCodePoint( (message[i].codePointAt() - 65 + key[j].codePointAt() - 65) % engAlphabet.length + 65) );
        
        j++;

      } else {
        encryptedText.push(message[i]);
      };
    };

    return this.reverse === false ? encryptedText.reverse().join('') : encryptedText.join('');
  };


  decrypt(encrypted, key) {
    if (!encrypted || !key) throw new Error();

    let engAlphabet = [];
    for (let i = 65; i <= 90; i++) {
      engAlphabet.push(String.fromCharCode(i));
    };

    encrypted = encrypted.toUpperCase().split('');
    key = key.toUpperCase().split('');

    while (key.length < encrypted.length) {
      key = key.concat(key);
    };

    let decryptedText = [];

    for (let i = 0, j = 0; i < encrypted.length; i++) {

      if (engAlphabet.includes(encrypted[i])) {

        decryptedText.push(String.fromCodePoint(((encrypted[i].codePointAt() - key[j].codePointAt() + engAlphabet.length)) % engAlphabet.length + 65));

        j++;

      } else {
        decryptedText.push(encrypted[i]);
      };
    };

    return this.reverse === false ? decryptedText.reverse().join('') : decryptedText.join('');
  };
};

module.exports = VigenereCipheringMachine;
