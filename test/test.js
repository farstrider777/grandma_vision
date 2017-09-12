// Import Chai
import chai from 'chai';

// Import Any Files to Test
import likeCounter from "../src/js/controllers/counter.js";

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let x = new Object;
      expect(x).to.be.an.instanceof(Object);
    });

  });

  describe('testing value of like counter', function () {
    it('should return the correct value', function () {
      console.log("hi there");
      console.log(likeCounter);
    });
  });


});
