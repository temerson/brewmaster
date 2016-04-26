import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Layout from '../src/components/Layout'
import Navigation from '../src/components/Navigation'

describe('Components', function() {
  describe('<Footer />', function() {
    it('should contain current year', function() {
      const elementHtml = shallow(<Footer />).html();
      const currentYear = new Date().getFullYear();
      expect(elementHtml).to.contain(currentYear);
    })
  })

  describe('<Layout />', function() {
    it('should contain one Header', function() {
      const wrapper = shallow(<Layout />);
      expect(wrapper.find(Header)).to.have.length(1);
    })

    it('should contain one Navigation', function() {
      const wrapper = shallow(<Layout />);
      expect(wrapper.find(Navigation)).to.have.length(1);
    })
  })
})
