import styled from "styled-components";

export const StyledSearchForm = styled.form`
    position: relative;

    margin-left: auto;
    margin-right: auto;
    margin-top: 54px;
    width: 280px;
    height: 20px;
    @media screen and (min-width: 768px){
        width: 366px;
        margin-top: 40px;
    }
    @media screen and (min-width: 1280px){
        width: 394px;
    }
    
    & input{
        width: 100%;

        background-color: transparent;
        border: none;
        border-bottom: 0.5px solid #FFFFFF;
    }

    & button{
        position: absolute;
        right: 0px;
        bottom: 6px;

        margin: 0;
        padding: 0%;
        background-color: transparent;
        border: none;
        width: 13px;
        height: 13px;
    }
    & .serarch-icon{
        width: 13px;
        height:  15px;
    }
`