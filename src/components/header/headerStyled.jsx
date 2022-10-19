import styled from "styled-components"
import { Container } from "../Container/ContainerStyled"
import image1Left from "./images/bacground-image3-left.jpg"
import image1Right from "./images/bacground-image3-right.jpg"
import image2Left from "./images/bacground-image2-left.jpg"
import image2Right from "./images/bacground-image2-right.jpg"
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
    height: 230px;
    background-image: url(${image1Left}), url(${image1Right});
    background-position: left top, right top;
    background-repeat: no-repeat;
    background-color: #272e34;
    @media screen and (min-width: 768px){
        background-image: url(${image2Left}), url(${image2Right});
        height: 216px;
    }
    & h1{
        display: none;
    }
    & nav ul{
        display: flex;
        gap: 39px;
    }
    & .topLine{
        display: flex;
        justify-content: space-between;
    }
`

export const HeaderContainer = styled(Container)`
    
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

