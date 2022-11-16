import styled from 'styled-components'
import Theme from 'theme'

export const CarousalContainer = styled.div`
  min-height: 100px;
  margin-top: 80px;
  position: relative;

  .slick-dots {
    display: flex;
    width: max-content;
    align-items: center;
    /* bottom: 10px; */
    left: 40px;
  }

  .slick-slide.slick-active.slick-current
    + .slick-slide.slick-active
    > div
    > div
    > div {
    transition: all 0.8s ease-in-out;
  }

  .slick-dots > li {
    width: 100%;
    height: 100%;
  }
  .slick-dots > li > div {
    transition: all 0.5s 0.1s ease-in-out;
  }

  .slick-dots > li.slick-active > div {
    background: ${Theme.colors.$primary};
    width: 40px;
  }
`
export const CarousalItem = styled.div`
  padding: 5px;
  margin-bottom: 20px;
`
export const Dots = styled.div`
  width: 7px;
  height: 7px;

  border-radius: 25px;
  background: ${Theme.colors.$gray300};
`
export const ArrowBtnContainer = styled.div`
  position: absolute;
  right: 40px;
  top: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const HeaderContainer = styled.div`
  text-align: center;
`
