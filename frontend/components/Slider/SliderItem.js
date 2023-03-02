import Image from "next/image";

//assets
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function SliderItem({ image }) {
  return (
    <div className="bg-gray-900 h-full flex flex-col items-center justify-center py-12">
      <div className="mx-auto overflow-hidden rounded-full w-[300px]">
        <Image src={image} alt='product-image' width={100} height={200} />
      </div>
    </div>
  )
}
