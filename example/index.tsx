import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee mug - Developer',
  // img: './coffee-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard
        product={ product }
        initialValues={{ count: 4, maxCount: 10 }}>
          {
            ({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
              </>
            )
          }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
