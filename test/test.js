import React from 'react';
import Footer from '../src/components/Footer'
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when value is not present', function() {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });

  describe('#slice()', function() {
    it('should return 0 when sliced', function() {
      expect([123,456].slice(0,1)).to.eql([123]);
    });
  });
});
