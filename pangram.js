var xregexp = require('xregexp'),
  validator = require('validator'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var Pangram = function(sentence) {
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
  throw new NotImplementedException();
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