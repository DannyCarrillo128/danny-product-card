import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage } from '../../src/components';
// import { product2 } from '../data/products';

describe('Product Image', () => {

  test('should show the component with the corresponding image', () => {
    const wrapper = renderer.create(
      <ProductImage className="custom-class" image="../test-image.jpg" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  /* test('should show the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={ product2 }>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  }); */

});
