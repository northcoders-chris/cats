/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var cats = require(path.join(__dirname, '..', './cats.js'));

describe('cats()', function () {
  'use strict';

  it('exists', function () {
    expect(cats).to.be.a('function');
  });

  it('does something', function () {
    expect(true).to.equal(false);
  });
  // Add more assertions here
});
