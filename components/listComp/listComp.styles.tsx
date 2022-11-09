import styled from 'styled-components'
import Theme from 'theme'

export const ListCompContainer = styled.div`
  margin: ${Theme.space.$10} 0;
`
export const ListCardContainer = styled.div`
  padding: ${Theme.space.$5};
  border-radius: ${Theme.radius.$default};
  background: white;
  display: flex;
  /* align-items: flex-start; */
  min-height: 170px;
  gap: ${Theme.space.$6};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
export const ImgContainer = styled.div`
  position: relative;
  flex: 1;
  border-radius: ${Theme.radius.$default};
  overflow: hidden;
`
export const ListCardDescContainer = styled.div`
  flex: 2;
`

export const ReadMoreBtn = styled.div`
  display: flex;
  cursor: pointer;
  gap: ${Theme.space.$2};
  align-items: center;
  width: max-content;
  margin-left: auto;
  margin-top: ${Theme.space.$4};
  transition: 0.3s ease;
  padding: ${Theme.space.$1} ${Theme.space.$2};
  border-radius: ${Theme.radius.$default};

  &:hover {
    background: ${Theme.colors.$gray100};
  }
  &:active {
    transform: scale(0.95);
  }
`
