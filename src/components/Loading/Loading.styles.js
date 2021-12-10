import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    /* background: var(--black); */
    padding: 3.5rem 5%;
    margin: 0;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem 0;
    margin: 0 -5%;
    overflow: hidden;

    .dot-pulse {
        position: relative;
        left: -9999px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        color: var(--orange);
        animation: dotPulse 1.5s infinite linear;
        animation-delay: .25s;
        }

    .dot-pulse::before, .dot-pulse::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: var(--orange);
        color: var(--orange);
        }

    .dot-pulse::before {
        box-shadow: 9984px 0 0 -5px var(--orange);
        animation: dotPulseBefore 1.5s infinite linear;
        animation-delay: 0s;
        }

    .dot-pulse::after {
        box-shadow: 10014px 0 0 -5px var(--orange);
        animation: dotPulseAfter 1.5s infinite linear;
        animation-delay: .5s;
        }

    @keyframes dotPulseBefore {
        0% {
            box-shadow: 9984px 0 0 -5px var(--orange);
        }
        30% {
            box-shadow: 9984px 0 0 2px var(--orange);
        }
        60%,
        100% {
            box-shadow: 9984px 0 0 -5px var(--orange);
        }
        }

    @keyframes dotPulse {
        0% {
            box-shadow: 9999px 0 0 -5px var(--orange);
        }
        30% {
            box-shadow: 9999px 0 0 2px var(--orange);
        }
        60%,
        100% {
            box-shadow: 9999px 0 0 -5px var(--orange);
        }
        }

    @keyframes dotPulseAfter {
        0% {
            box-shadow: 10014px 0 0 -5px var(--orange);
        }
        30% {
            box-shadow: 10014px 0 0 2px var(--orange);
        }
        60%,
        100% {
            box-shadow: 10014px 0 0 -5px var(--orange);
        }
        }

`