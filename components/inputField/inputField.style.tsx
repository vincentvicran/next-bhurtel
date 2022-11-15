import styled from 'styled-components'

import Theme from 'theme'

export const InputContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${Theme.radius.$default};
  border: 1px solid ${Theme.colors.$borderInput};
  outline: none;
  background-color: ${Theme.colors.$gray100};

  &:hover {
    border: 1px solid ${Theme.colors.$gray200};
  }

  &:focus {
    border: 1px solid ${Theme.colors.$gray400};
  }
`

export const InputFieldStyled = styled.input`
  width: 100%;
  padding: 15px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${Theme.colors.$gray600};
  font-size: ${Theme.fontSizes.$2};

  &::placeholder {
    font-size: ${Theme.fontSizes.$2};
  }
`

export const InputError = styled.div`
  font-size: ${Theme.fontSizes.$2};
  color: ${Theme.colors.$error};
`
export const InputLabel = styled.div`
  font-weight: ${Theme.fontWeights.$semibold};
  font-size: ${Theme.fontSizes.$2};
  margin-bottom: ${Theme.space.$0_5};
`
export const TextareaStyled = styled.textarea`
  width: 100%;
  padding: 15px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${Theme.colors.$gray600};
  font-size: inherit;
  font-family: inherit;
  resize: none;
  font-size: ${Theme.fontSizes.$2};

  &::placeholder {
    font-size: ${Theme.fontSizes.$2};
  }
`
