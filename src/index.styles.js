import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600;700;800;900&display=swap');
 *,
 *::before,
 *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
 }
`