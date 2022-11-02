import {VStack} from 'common/stack'
import React from 'react'

import {
  InputContainerStyled,
  InputError,
  InputFieldStyled,
  InputLabel,
  TextareaStyled
} from './inputField.style'
export {InputError}

export interface InputFieldProps
  extends React.ComponentPropsWithoutRef<'input'> {
  labelName?: string
  error?: string | boolean | undefined
  containerStyle?: React.CSSProperties
  prepend?: React.ReactNode
  append?: React.ReactNode
}
export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  labelName?: string
  error?: string | boolean | undefined
  containerStyle?: React.CSSProperties
  prepend?: React.ReactNode
  append?: React.ReactNode
}

export const InputField = ({
  labelName,
  required,
  error,
  containerStyle,
  prepend,
  append,
  ...restProps
}: InputFieldProps) => {
  return (
    <VStack>
      {labelName && (
        <InputLabel>
          {labelName} {required ? '*' : null}
        </InputLabel>
      )}
      {error && <InputError style={{margin: '4px 0'}}>{error}</InputError>}

      <InputContainerStyled style={containerStyle}>
        {prepend}
        <InputFieldStyled {...restProps} />
        {append}
      </InputContainerStyled>
    </VStack>
  )
}

export const Textarea = ({
  labelName,
  required,
  error,
  containerStyle,
  prepend,
  append,
  ...restProps
}: TextareaProps) => {
  return (
    <VStack>
      {labelName && (
        <InputLabel>
          {labelName} {required ? '*' : null}
        </InputLabel>
      )}
      {error && <InputError style={{margin: '4px 0'}}>{error}</InputError>}

      <InputContainerStyled style={containerStyle}>
        {prepend}
        <TextareaStyled {...restProps} />
        {append}
      </InputContainerStyled>
    </VStack>
  )
}
