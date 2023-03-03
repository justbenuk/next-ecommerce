import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//components
import SliderItem from "./SliderItem";

export default function Slider( { products } ) {

  return (
    <div className='mt-3'>
      { products && (
        <Carousel autoPlay showStatus={ false } showThumbs={ false } infiniteLoop={ true }>
          { products.data.map( ( product ) => <SliderItem product={ product } key={ product.id } /> ) }
        </Carousel>
      )
      }
    </div >
  )
}
