import Image from "next/image";

//assets
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function SliderItem( { product } ) {
  return (
    <div className="bg-gray-800 h-full flex flex-col items-center justify-center py-12">
      <div className="mx-auto">
        <h1 className='text-white font-bold'>{ product.attributes.name }</h1>
        <div className='rounded-full overflow-hidden bg-white p-6 w-[200px] mx-auto'>
          { product.attributes.image.data && <Image src={ `http://0.0.0.0:1337${product.attributes.image.data.attributes.url}` } alt='product-image' width={ 200 } height={ 200 } /> }
        </div>
      </div>
    </div>
  )
}
