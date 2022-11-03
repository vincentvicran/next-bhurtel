import {MainCarousel, Test} from '../../common/carousel'
import {TestimonialCard} from 'components/testimonialCard'
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <TestimonialCard
        image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Aayan"
        description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, orn
        are lacus platea malesuada ac. Malesuada ullamcorper vitae mattis in. Scelerisque adipiscing tr
        istique senectus commodo, et viverra fermentum augue. Vitae nisl, nunc phasellus tinc
        idunt urna, risus quam vel nisl. Sed neque arcu elementum volutpat porttitor erat sit.
         Enim, porta ris
        us arcu, faucibus. Semper nec, vitae suspendisse lectus urna sed eget lacinia e
        u. Leo tortor, habitant morbi at ut. sed eget lacinia eu. Leo tortor, habitant morbi at ut. ”"
        address="Balaju-Kathmandu"
      />
    </div>
  )
}

export default HomePage
