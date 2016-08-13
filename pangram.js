var xregexp = require('xregexp'),
  validator = require('validator'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

const ALPHABET = 'abcdefghijklmnoqprstuvwxyz';

var Pangram = function(sentence) {
  this.sentence = this.sanitize(sentence);
};

Pangram.prototype.isPangram = function() {
  var results = {},
    i = 0;

  if (this.sentence.length === 0) {
    return false;
  }

  for (i = 0 ; i < this.sentence.length ; i++ ) {
    if (results[this.sentence[i]] === undefined) {
      results[this.sentence[i]] = true;
    }
  }

  for (i = 0 ; i < ALPHABET.length ; i++) {
    if (results[ALPHABET[i]] === undefined) {
      return false;
    }
  }

  return true;
};

/*
 *  Trims, removes unprintable control characters 
 *  and reduces alphabetic chars to lower case.
 */
Pangram.prototype.sanitize = function(str) {
  var i = 0,
    result = '',
    regex;
  xregexp.install('astral');
  regex = xregexp('^\\pC+$');

  str = str.toLowerCase();
  for (i = 0 ; i < str.length ; i++ ) {
    if (!regex.test(str[i])) {
      result = result + str[i];
    }
  }

  return validator.trim(result).replace(/  +/g, ' ');
};

module.exports = Pangram;