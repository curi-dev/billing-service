import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto';
}

button {
    cursor: pointer;
}

body {
    background: #5252f6;
    -webkit-font-smoothing: antialised;
}

`;