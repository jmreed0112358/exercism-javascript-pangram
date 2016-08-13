var Pangram = require('./pangram');

const UNPRINTABLE_CHARS = '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f';

xdescribe('Pangram()', function()  {

  it('empty sentence', function() {
    var pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

  xit('pangram with only lower case', function()  {
    var pangram = new Pangram("the quick brown fox jumps over the lazy dog");
    expect(pangram.isPangram()).toBe(true);
  });

  xit("missing character 'x'", function()  {
    var pangram = new Pangram("a quick movement of the enemy will jeopardize five gunboats");
    expect(pangram.isPangram()).toBe(false);
  });

  xit("another missing character 'x'", function() {
    var pangram = new Pangram("the quick brown fish jumps over the lazy dog");
    expect(pangram.isPangram()).toBe(false);
  });

  xit("pangram with underscores", function() {
    var pangram = new Pangram("the_quick_brown_fox_jumps_over_the_lazy_dog");
    expect(pangram.isPangram()).toBe(true);
  });

  xit("pangram with numbers", function() {
    var pangram = new Pangram("the 1 quick brown fox jumps over the 2 lazy dogs");
    expect(pangram.isPangram()).toBe(true);
  });

  xit('missing letters replaced by numbers', function() {
    var pangram = new Pangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog");
    expect(pangram.isPangram()).toBe(false);
  });

  xit('pangram with mixed case and punctuation', function()  {
    var pangram = new Pangram("\"Five quacking Zephyrs jolt my wax bed.\"");
    expect(pangram.isPangram()).toBe(true);
  });

  xit('pangram with non-ascii characters', function()  {
    var pangram = new Pangram("Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.");
    expect(pangram.isPangram()).toBe(true);
  });
});

describe('sanitize()', function() {

  it('tokenizes, returns the expected result', function() {
    var actual = words.sanitize('Foo Bar');
    var expected = 'foo bar';
    expect(actual).toEqual(expected);
  });

  it('input contains extra whitespace, returns expected input', function() {
    var actual = words.sanitize('  Foo   Bar   ');
    var expected = 'foo bar';
    expect(actual).toEqual(expected);
  });

  it('input contains unicode, returns expected input', function() {
    var actual = words.sanitize('¡Hola! ¿Qué tal? Привет! Iñtërnâtiônàlizætiøn☃');
    var expected = '¡hola! ¿qué tal? привет! iñtërnâtiônàlizætiøn☃';
    expect(actual).toEqual(expected);
  });

  it('input contains unprintable characters, returns expected input', function() {
    var actual = words.sanitize( UNPRINTABLE_CHARS + 'Foo Bar');
    var expected = 'foo bar';
    expect(actual).toEqual(expected);
  });

  it('input contains unprintable characters, returns expected input', function() {
    var actual = words.sanitize( UNPRINTABLE_CHARS + '¡Hola! ¿Qué tal? Привет! Iñtërnâtiônàlizætiøn☃');
    var expected = '¡hola! ¿qué tal? привет! iñtërnâtiônàlizætiøn☃';
    expect(actual).toEqual(expected);
  });
});
