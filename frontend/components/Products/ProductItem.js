import Link from "next/link"
import Image from "next/image"
export default function ProductItem({ product }) {
  return (
    <Link href='/' className="flex flex-col justify-between border rounded shadow-xl">
      <Image src={`${product.image}`} height={200} width={200} alt={product.name} className='mx-auto py-2' />
      <div className="p-6">
        <h3>{product.name}</h3>
      </div>
      <div>
        <p className="p-6">£ {product.price}</p>
      </div>
    </Link>
  )
}
