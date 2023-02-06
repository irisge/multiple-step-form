import { createGlobalStyle } from 'styled-components';

export const grey = '#9699AA';
export const denim = '#022959';
export const redErrors = '#EE374A';
export const veryLightGrey = '#F8F9FF';
export const purple = '#483EFF';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Ubuntu';
        src: url('/src/assets/fonts/Ubuntu-Regular.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: 'Ubuntu';
        src: url('/src/assets/fonts/Ubuntu-Medium.ttf') format('truetype');
        font-style: normal;
        font-weight: 500;
    }
    @font-face {
        font-family: 'Ubuntu';
        src: url('/src/assets/fonts/Ubuntu-Bold.ttf') format('truetype');
        font-style: normal;
        font-weight: 700;
    }
    
    * {
        box-sizing:border-box;
        margin:0;
    }

    #root {
        background: #EFF5FF;
        width: 100vw;
        height: 100vh;
        font-family: Ubuntu;
    }

    img {
        max-width: 100%;
    }

    h1 {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.75rem;
        color: ${denim};
    }

    h2 {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.563rem;
        color: ${grey};
    }

    a {
        text-decoration: none;
    }

    h3 {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.125rem;
        color: ${denim};


    }

    h4 {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${grey};
    }

    h6 {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-family: Ubuntu;
        text-align: left;
    }
`;

export default GlobalStyles;
