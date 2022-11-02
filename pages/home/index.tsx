import {DescriptionCard} from 'components/descriptionCard'
import {MainCarousel} from '../../common/carousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div style={{width: 500, padding: 50}}>
        <DescriptionCard
          imgUrl={
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*'
          }
          title="What are the major Construction Accident reports in NYC?"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibh"
          author="binay"
          date={new Date()}
        />
      </div>
    </div>
  )
}

export default HomePage
