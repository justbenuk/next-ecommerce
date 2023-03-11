import Link from "next/link"
import Image from "next/image"
export default function ProductItem( { product } ) {
  return (
    <Link href={ `/products/${product.attributes.slug}` } className="grid grid-cols-2 justify-between border rounded shadow-xl">
      <div>
        { product.attributes.image.data &&
          <Image src={ `http://0.0.0.0:1337${product.attributes.image.data.attributes.url}` } height={ 200 } width={ 200 } alt={ product.attributes.name } className='p-4 h-[200px] w-[120px] mx-auto' />
        }
      </div>
      <div>
        <h3 className="font-bold text-center">{ product.attributes.name }</h3>
        <p>{ product.rating } from { product.numReviews } Reviews</p>
        <p>£ { product.attributes.price }</p>
      </div>
    </Link>
  )
}
