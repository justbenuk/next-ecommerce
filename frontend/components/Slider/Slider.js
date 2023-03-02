import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//components
import SliderItem from "./SliderItem";

export default function Slider({ products }) {
  return (
    <Carousel autoPlay showStatus={false} showThumbs={false} infiniteLoop={true}>
      {products.map((product) => <SliderItem image={product.image} key={product.id} />)}
    </Carousel>
  )
}
