import { SaleCards } from './components/saleSection/saleCards'
import { Companys } from './components/clintCompanySection/conpanys'
import { DiscountBanner } from './components/descountSection/disscountBanner'
import { CustomerSupport } from './components/customerSupportSection/customerSupport'
import { FeaturdProducts } from './components/fraturdProductsSection/featurdproducts'
import Footer from './components/fotterSection/fotter'
import {Header} from './components/header/header'
import { Hero } from './components/heroSection/hero'
import { HotDeal } from './components/hotDealSection/hotDeals'
import InstagramSection from './components/InstagramSection/instagramSection'
import { News } from './components/newsSection/news'
import { PopularProcuct } from './components/PoularProductsSection/popularProduct'
import { ProductCatogary } from './components/productCatogarySection/productCatogary'
import SubscribeSection from './components/subscribeSection/subscribe'
import { Testomonial } from './components/testomonialSection/testomonial'

export const App = () => {
  return (
    <>
     <Header />
     <Hero />
     <CustomerSupport/>
     <ProductCatogary/>
     <PopularProcuct/>
     <SaleCards/>
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

