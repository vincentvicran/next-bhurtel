import {CompWrapper} from 'common/compWrapper'
import {About} from 'components/about'
import {MainCarousel} from '../../common/carousel'

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <CompWrapper>
        <About text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibh." />
      </CompWrapper>
    </>
  )
}

export default HomePage
