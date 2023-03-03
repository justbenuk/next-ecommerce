import Link from "next/link"
import Image from "next/image"
export default function ProductItem( { product } ) {
  return (
    <Link href={ `/products/${product.attributes.slug}` } className="flex flex-col justify-between border rounded shadow-xl">
      { product.attributes.image.data &&
        <Image src={ `http://0.0.0.0:1337${product.attributes.image.data.attributes.url}` } height={ 200 } width={ 200 } alt={ product.attributes.name } className='mx-auto py-2' />
      }
      <div className="p-6">
        <h3 className="font-bold text-center">{ product.attributes.name }</h3>
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <p>{ product.rating } from { product.numReviews } Reviews</p>
        <p className="">£ { product.attributes.price }</p>
      </div>
    </Link>
  )
}
