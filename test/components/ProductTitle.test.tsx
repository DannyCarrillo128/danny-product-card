import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('Product Title', () => {

  test('should show the component with the corresponding title', () => {
    const wrapper = renderer.create(
      <ProductTitle className="custom-class" title="sample text" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={ product1 }>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
