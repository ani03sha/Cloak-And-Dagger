import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
    *,
    *::after,
    *::before {
        margin: 0 px;
        padding: 0 px;
        box - sizing: inherit;
    }

    html {
        font - size: 62.5 % ;
    }

    body {
        box - sizing: border - box;
        font - family: 'Montserrat', sans - serif;
    }
`;

export default GlobalStyles;