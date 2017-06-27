import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'

// import Foo from '../../src/js/components/Foo';
import Home from '../../src/js/components/home/Home';

// Snapshot for Home React Component
describe('>>>H O M E --- Snapshot',()=>{

  it('+++capturing Snapshot of Home', () => {
      const renderedValue =  renderer.create(<Home />).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });

});

describe('>>>H O M E --- Shallow render REACT COMPONENTS', () => {

  it('+++ should render without throwing an error', () => {
    expect(shallow(<Home />).contains(<div className="container Home"><h1>Landing Page</h1></div>)).toBe(true);
  });

  it('+++ should mount in a full DOM', function() {
    expect(mount(<Home />).find('.Home').length).toBe(1);
  });

  it('+++ should render to static html', () => {
    expect(render(<Home />).text()).toEqual('Landing Page');
  });

});
