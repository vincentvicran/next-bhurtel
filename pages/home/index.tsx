import {MainDescriptionCard} from 'components/mainDescriptionCard'
import {MainCarousel} from '../../common/carousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div style={{padding: 30}}>
        <MainDescriptionCard
          date={new Date()}
          author="Binay"
          title="What are the major Construction Accident reports in NYC?"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibh.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu..."
          imgUrl="https://i.guim.co.uk/img/media/d30acf97e65d4cf498c5be168ea76ce83fc0f602/0_16_2534_1521/master/2534.jpg?width=620&quality=85&auto=format&fit=max&s=3bd14cf476a7a60c7396c0e6eee7aa5a"
        />
      </div>
    </div>
  )
}

export default HomePage
