const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.first_symbol = "A";
    this.last_symbol = "Z";
    this.first_symbol_code = this.first_symbol.charCodeAt();
    this.last_symbol_code = this.last_symbol.charCodeAt();
    this.alpha_length = this.last_symbol_code - this.first_symbol_code;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '',
      key_position = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      result += this.isAlphabet(message[i]) ?
        this.getSymbol(message[i], key[key_position++ % key.length]) :
        message[i];
    }

    return this.direct ? result : Array.from(result).reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '',
      key_position = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      result += this.isAlphabet(message[i]) ?
        this.getSymbol(message[i], key[key_position++ % key.length], false) :
        message[i];
    }

    return this.direct ? result : Array.from(result).reverse().join('');
  }

  isAlphabet(symbol) {
    return new RegExp(`[${this.first_symbol}-${this.last_symbol}]`).test(symbol);
  }

  getSymbol(symbol, key, encrypt = true) {
    let symbol_code = symbol.charCodeAt(),
      key_code = key.charCodeAt();

    let symbol_offset = symbol_code - this.first_symbol_code,
      key_offset = (key_code - this.first_symbol_code) * (encrypt ? 1 : -1),
      offset = symbol_offset + key_offset;

    if (offset < 0) {
      offset += this.alpha_length - (1 * (encrypt ? 1 : -1));
    } else if (offset > this.alpha_length) {
      offset -= this.alpha_length + (1 * (encrypt ? 1 : -1));
    }

    return String.fromCharCode(this.first_symbol_code + offset);
  }
}

module.exports = {
  VigenereCipheringMachine
};
