import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --primary: hsl(197, 100%, 30%);
        --primary-100: hsl(197, 100%, 96%);
        --primary-200: hsl(197, 100%, 87%);
        --primary-400: hsl(197, 100%, 22%);
        --primary-500: hsl(197, 100%, 10%);

        --secondary: hsl(17, 100%, 30%);
        --secondary-100: hsl(17, 100%, 96%);
        --secondary-200: hsl(17, 100%, 80%);
        --secondary-400: hsl(17, 100%, 22%);
        --secondary-500: hsl(17, 100%, 10%);

        --grey: hsl(197, 10%, 40%);
        --light: hsl(197, 10%, 96%);
        --lighter: hsl(197, 10%, 80%);
        --darker: hsl(197, 10%, 25%);
        --dark: hsl(197, 10%, 10%);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 300;
        line-height: 1.5;
        font-size: 1.25rem;
    }

    header {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 1rem 0;
        background-color: var(--primary);
        z-index: 10;
    }

    h1 {
        margin: 0;
        text-align: center;
        color: var(--primary-100);
    }

    main {
        height: 100vh;
        overflow: auto;
        padding: 1.25rem;
        padding-top: 7rem;
        padding-bottom: 150px;
        background-image: linear-gradient(var(--primary) 8%, var(--light));
        background-attachment: fixed;
    }
`;