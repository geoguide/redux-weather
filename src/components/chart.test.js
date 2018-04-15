import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chart from './chart';

describe('Chart', () => {
  let props;
  let mountedChart;

  const chart = () => {
    if (!mountedChart) {
      mountedChart = mount(
        <Chart {...props} />
      );
    }
    return mountedChart;
  }

  beforeEach(() => {
    props = {
      color: undefined,
      data: undefined
    };
    mountedChart = undefined;
  });

  it('always renders a div', () => {
    const divs = chart().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = chart().find('div');
      // When using .find, enzyme arranges the nodes in order such
      // that the outermost node is first in the list. So we can
      // use .first() to get the outermost div.
      const wrappingDiv = divs.first();

      // Enzyme omits the outermost node when using the .children()
      // method on lockScreen(). This is annoying, but we can use it
      // to verify that wrappingDiv contains everything else this
      // component renders.
      expect(wrappingDiv.children()).toEqual(chart().children());
    });

    it('always contains Sparklines', () => {
      expect(chart().find(Sparklines).length).toBe(1);
    });
  });

});
