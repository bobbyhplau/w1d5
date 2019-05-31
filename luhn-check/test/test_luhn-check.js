var assert = require ("chai").assert;
var check = require ("../lib/check.js");

describe ("Luhn Algo Check", function() {
  it("should return true if number is valid", function() {

    var accountNumber = "79927398713";

    assert.isTrue(check(accountNumber));
  })

  it("should return false if number is not valid", function() {

    var accountNumber = "79927398712";

    assert.isFalse(check(accountNumber));
  })
})