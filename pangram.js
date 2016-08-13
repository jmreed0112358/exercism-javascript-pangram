var xregexp = require('xregexp'),
  validator = require('validator'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var Pangram = function(sentence) {
  throw new NotImplementedException();
};

Pangram.prototype.isPangram = function() {
  throw new NotImplementedException();
};

/*
 *  Trims, removes unprintable control characters 
 *  and reduces alphabetic chars to lower case.
 */
Pangram.prototype.sanitize = function(sentence) {
  throw new NotImplementedException();
};