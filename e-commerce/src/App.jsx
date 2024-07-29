import { Banner } from './components/banner'
import { Companys } from './components/conpanys'
import { DiscountBanner } from './components/disscountBanner'
import { Featurd } from './components/featurd'
import { FeaturdProducts } from './components/featurdproducts'
import Footer from './components/fotter'
import {Header} from './components/header'
import { Hero } from './components/hero'
import { HotDeal } from './components/hotDeals'
import InstagramSection from './components/instagramSection'
import { News } from './components/news'
import { PopularProcuct } from './components/popularProduct'
import { ProductList } from './components/productList1'
import SubscribeSection from './components/subscribe'
import { Testomonial } from './components/testomonial'

export const App = () => {
  return (
    <>
     <Header />
     <Hero />
     <Featurd/>
     <ProductList/>
     <PopularProcuct/>
     <Banner/>
     <HotDeal/>
     <DiscountBanner/>
     <FeaturdProducts/>
     <News/>
     <Testomonial/>
     <Companys/>
     <InstagramSection/>
     <SubscribeSection/>
     <Footer/>
    </>
  )
}

