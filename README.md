# danny-product-card

This is a NPM test deployment package.

## Example
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'danny-product-card';
```
```
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
```
