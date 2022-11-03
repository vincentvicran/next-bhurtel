import Slider from 'react-slick'
import styled from 'styled-components'

export const CarouselSlider = styled(Slider)`
  width: 99vw;
  border: 2px solid red;
  height: inherit;
  position: relative;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`
