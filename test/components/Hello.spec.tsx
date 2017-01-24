import * as React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';
// import * as TestUtils from 'react-addons-test-utils';

import {Hello} from '../../src/components/Hello';


describe('components', () => {
  describe('<Hello/>', function () {
    it('should render with given props', function () {
      const props = {
        compiler: 'TypeScript',
        framework: 'React'
      };
      const wrapper = shallow(<Hello {...props}/>);
      // console.log(wrapper.props());
      expect(wrapper.find('h1')).to.have.length(1);
      expect(wrapper.html()).contains('Hello from TypeScript and React!');

    });
  });
});


