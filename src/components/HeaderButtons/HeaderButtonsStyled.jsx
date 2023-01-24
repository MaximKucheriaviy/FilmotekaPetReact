import styled from "styled-components";

export const ButtonsContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    & button{
        border: 1px solid #FFFFFF;
        border-radius: 5px;
        width: 148px;
        height:42px;
        background-color: transparent;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;

        color: white;
        &:last-child{
            margin-left: 16px;
        }
        &:hover{
            box-shadow: 0px 0px 10px #FF6B01;
        }
    }
    & .active{
        background-color: #FF6B01;
        border: none;
    }
`