import Slider from 'react-slick'
import styled from 'styled-components'
import Theme from 'theme'

export const CarouselSlider = styled(Slider)`
  width: 99vw;
  height: inherit;
  position: relative;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`

export const CarousalContainer = styled.div`
  min-height: 100px;
  margin-bottom: 40px;
  position: relative;

  .slick-dots {
    display: flex;
    width: max-content;
    align-items: center;
    /* bottom: 10px; */
    left: 47%;
    bottom: 27px;
  }

  .slick-slide.slick-active.slick-current
    + .slick-slide.slick-active
    > div
    > div
    > div {
    transition: all 0.8s ease-in-out;
    border: 1px solid ${Theme.colors.$primary};
  }

  .slick-dots > li {
    width: 100%;
    height: 100%;
  }

  .slick-dots > li.slick-active > div {
    background: ${Theme.colors.$primary};
    width: 40px;
    transition: all 0.3s 0.1s ease-in-out;
  }
`
export const CarousalItem = styled.div`
  min-height: '70px';
  padding: 5px;
`
export const Dots = styled.div`
  width: 7px;
  height: 7px;

  border-radius: 25px;
  background: ${Theme.colors.$gray300};
`
