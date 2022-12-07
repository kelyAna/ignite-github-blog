import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: nunito;
   }
   :focus {
     outline: 0;
   }
   body {
     background-color: ${(props) => props.theme['blue-800']};
     -webkit-font-smoothing: antialiased;
   }
 `
