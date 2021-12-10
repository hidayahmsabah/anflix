import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --background: #010001;
        --margin: 1em;

        //karasuno pallette
        /* --black: #222831;
        --grey: #393E46;
        --orange: #FD7014;
        --white: #EEE; */

        --black: #141414;
        --grey: #303030;
        --orange: #FF7B00;
        --less-orange: #FF8B43;
        --white: #EEE;
    }

    *{
        box-sizing: border-box;
        font-family: 'Source Sans 3', sans-serif;
        margin: 0;
        padding: 0;
    }

    html{
        background-color: var(---black);
    }

    main{
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar:hover,
    ::-webkit-scrollbar:active  {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background: var(--black);
        border-radius: 1em;
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(253, 112, 20, 0.7); 
        background: var(--less-orange); 

    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--orange); 
    }

`;
