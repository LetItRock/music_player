import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>

export interface IThemeInterface {
  primaryColor: string
  white: string
  accentColor: string
  gunPowder: string
  grey: string
}

export const theme = {
  primaryColor: '#d3d3d3',
  white: '#fefefe',
  accentColor: '#fd2c55',
  gunPowder: '#40414f',
  grey: '#eef0f5'
}

export default styled
export { css, createGlobalStyle, keyframes, ThemeProvider }
