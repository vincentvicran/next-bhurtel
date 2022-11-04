import styled from 'styled-components'
import Theme from 'theme'

export const DescContainer = styled.div<{isHorizontal: boolean}>`
  ${(props) =>
    props.isHorizontal
      ? `
			display: block;
			gap: ${Theme.space.$6};

			@media screen and (min-width: 700px) {
				display: flex;
			}
			`
      : `
			cursor: pointer;
			transition: 0.3s ease-in-out;
			max-width: 500px;

			&:hover {
				transform: translateY(-5px);
			}
	`}
`

export const ImgContainer = styled.div`
  flex: 1.2;
`
export const DescImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  border-radius: ${Theme.radius.$default};
`
export const DescParagraph = styled.p`
  font-size: ${Theme.fontSizes.$3};
  color: ${Theme.colors.$gray600};
  margin-top: ${Theme.space.$3};
`
export const DescAuthor = styled.p`
  color: ${Theme.colors.$primary};
  font-size: ${Theme.fontSizes.$2};
  font-style: italic;
  cursor: pointer;
  display: inline-block;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`
export const RightSection = styled.div``