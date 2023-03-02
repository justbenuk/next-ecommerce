//components
import ProductItem from "./ProductItem"
export default function ProductList({ products }) {
  return (
    <div className="container mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
