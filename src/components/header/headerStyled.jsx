import styled from "styled-components"
import { Container } from "../Container/ContainerStyled"
import image1Left from "./images/bacground-image3-left.jpg"
import image1Right from "./images/bacground-image3-right.jpg"
import image2Left from "./images/bacground-image2-left.jpg"
import image2Right from "./images/bacground-image2-right.jpg"
import image3Left from "./images/bacground-image1-left.jpg"
import image3Right from "./images/bacground-image1-right.jpg"
import librariImage380 from "./images/libraryImage380.jpg"
import librariImage768 from "./images/libraryImage768.jpg"
import librariImage1280 from "./images/libraryImage1280.jpg"
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
    height: 230px;
    
    background-image: ${props => !props.libraryTogle ? `url(${image1Left}), url(${image1Right})`:
    `url(${librariImage380})`
    };
    background-position: ${props => !props.libraryTogle ? `left top, right top`:
        `center`
    };
    ${props => props.libraryTogle && `background-size: cover;`};
    background-repeat: no-repeat;
    background-color: #232b31;
    @media screen and (min-width: 768px){
        background-image: ${props => !props.libraryTogle ? `url(${image2Left}), url(${image2Right})`:
        `url(${librariImage768})`
    };
        height: 216px;
    }
    @media screen and (min-width: 1280px){
        background-image:${props => !props.libraryTogle ? `url(${image3Left}), url(${image3Right})`:
        `url(${librariImage1280})`
    };
        height: 216px;
    }
    & h1{
        display: none;
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        color: white;

        margin-left: 10px;
        @media screen and (min-width: 768px){
            display: inline-block;
        }
    }
    & nav ul{
        display: flex;
        gap: 39px;
    }
    & .topLine{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .search-error{
        text-align: center;
        margin-top: 20px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FF001B;
    }
`

export const HeaderContainer = styled(Container)`
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width: 768px){
        padding-left: 32px;
        padding-right: 32px;
    }
    
`

export const Logo = styled.div`
    & svg{
        width: 24px;
        height: 24px;
        fill: transparent;
        stroke: white;
        stroke-width: 2px;
    }
`
export const NavButton = styled(NavLink)`
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: white;
    &.active{
        position: relative;
        &::before{
            content: "";
            position: absolute;
            bottom: -2px;

            display: block;
            width: 100%;
            height: 3px;
            background-color: red;
        }
    }
`

