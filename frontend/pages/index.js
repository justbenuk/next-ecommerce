import MainLayout from '@/layouts/MainLayout'
//Data
import products from '@/data/products'
// components
import ProductsList from '@/components/Products/ProductsList'
import Slider from '@/components/Slider/Slider'

export default function Home() {

  //get the products
  const data = products

  console.log(data)
  return (
    <MainLayout title='E-Commerce Store'>
      <Slider products={data} />
      <ProductsList products={data} />
    </MainLayout>
  )
}
