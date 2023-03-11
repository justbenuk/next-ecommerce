//components
import ProductItem from "./ProductItem"
export default function ProductList( { products } ) {
  return (
    <div className=" mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        { products.data.map( ( product ) => (
          <ProductItem product={ product } key={ product.id } />
        ) ) }
      </div>
    </div>
  )
}
