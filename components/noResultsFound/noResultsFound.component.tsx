import styled from 'styled-components'
import noResult from 'assets/images/noResults.png'
import Image from 'next/image'
import Theme from 'theme'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
const ImgContainer = styled.div`
  position: relative;
`
const Content = styled.h1`
  color: ${Theme.colors.$gray400};
  font-weight: 300;
  font-size: ${Theme.fontSizes.$4};
`
export function NoResultFound() {
  return (
    <Container>
      <ImgContainer>
        <Image
          src={noResult}
          alt={`no result`}
          height={`100`}
          objectFit={`contain`}
        />
      </ImgContainer>
      <Content>No Results Found</Content>
    </Container>
  )
}
