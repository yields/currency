
var currency = require('currency');
var assert = require('assert');

describe('currency(n)', function(){
  it('should format to currency', function(){
    assert('1,000.00' == currency(1000));
  })
})

describe('currency(str)', function(){
  it('should return a number', function(){
    assert(1000.00 == currency('1,000.00'));
  })
})
