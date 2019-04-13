import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  color?: string
  fontColor?: string
}

export const Button = styled.div<ButtonProps>`
  height: 3rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${({ color }) => color || '#7b83ff'};
  border-radius: 10px;
  color: ${({ fontColor }) => fontColor || 'white'};
  cursor: pointer;
  box-shadow: 0 0 20px #7614fd55;
  &:hover {
    box-shadow: 0 0 20px 5px #7614fd55;
  }
`
