import styled from 'styled-components'

export const Test = styled.div`
  cursor: pointer;
`
export const CarouselContainer = styled.div`
  height: 70vh;
  position: relative;
`

export const ActiveIndicatorContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  z-index: 100;
  color: red;
  border: 1px solid red;
`
// @include responsive-for(sm) {
//   bottom: 100px;
// }
export const CarouselText = styled.div`
  width: 85%;
  margin-left: 7.5%;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
  z-index: 10;
`
export const TextMain = styled.div`
  font-family: $avertaBold;
  color: $white;
  font-size: $large_heading;
`
export const ImageSliderContainer = styled.div`
  display: flex;
  position: relative;
`

export const ImageSlider = styled.div`
  position: relative;
  flex: 1 0 100%;
  height: 70vh;
`
export const HideOverFlow = styled.div`
  overflow: hidden;
`
