/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var cats = require(path.join(__dirname, '..', './cats.js'));

describe('cats()', function () {
  'use strict';

  it('exists', function () {
    expect(cats).to.be.a('function');
  });

  it('returns an array', function () {
    expect(cats([])).to.be.an('array');
  });

  it('removes cats which are not ready to be re homes', function () {
    var testData = [
      { readyForHome: 'No' },
      { readyForHome: 'Yes', name: 'chris', personality: [] }
    ]
    expect(cats(testData)[0].readyForHome).to.equal(true);
  });

  it('removes cats which are aggresive', function () {
    var testData = [
      { readyForHome: 'Yes', personality: ['aggressive'] },
      { readyForHome: 'Yes', name: 'chris', personality: [] }
    ]
    expect(cats(testData)[0].personality.indexOf('aggressive')).to.equal(-1);
  });

  it('removes cats which are aggresive', function () {
    var testData = [
      { readyForHome: 'Yes', name: 'chris', personality: [] }
    ]
    expect(cats(testData)[0].readyForHome).to.equal(true);
  });

  it('removes cats which are aggresive', function () {
    var testData = [
      { readyForHome: 'Yes', name: 'chris', personality: [], age: 5 }
    ]
    var assertAge = new Date().getFullYear() - 5;
    expect(cats(testData)[0].yearOfBirth).to.equal(assertAge);
  });

  it('capitalises the cats name', function () {
    var testData = [
      { readyForHome: 'Yes', personality: [], age: 5, name: 'chris' }
    ]
    var assertAge = new Date().getFullYear() - 5;
    expect(cats(testData)[0].name).to.equal('Chris');
  });

  it('capitalises every word of the cats name', function () {
    var testData = [
      { readyForHome: 'Yes', personality: [], age: 5, name: 'mr fluffy poos' }
    ]
    var assertAge = new Date().getFullYear() - 5;
    expect(cats(testData)[0].name).to.equal('Mr Fluffy Poos');
  });

  // Add more assertions here
});
