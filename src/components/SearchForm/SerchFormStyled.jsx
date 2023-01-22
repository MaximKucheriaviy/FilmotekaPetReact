import styled from "styled-components";

export const StyledSearchForm = styled.form`
    position: relative;

    margin-left: auto;
    margin-right: auto;
    margin-top: 54px;
    width: 280px;
    @media screen and (min-width: 768px){
        width: 366px;
        margin-top: 40px;
    }
    @media screen and (min-width: 1280px){
        width: 394px;
    }
    
    & input{
        width: 100%;
        display: block;
        box-sizing: border-box;

        background-color: transparent;
        border: none;
        border-bottom: 0.5px solid #FFFFFF;
        padding-bottom: 4px;
        padding-left: 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        opacity: 1;

        &::placeholder{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #FFFFFF;
            opacity: 1;
        }
        &:focus{
            outline: none;
            box-shadow: 0px 0px 20px #7c3c00;
            &::placeholder{
                opacity: 0;
            }
        }
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