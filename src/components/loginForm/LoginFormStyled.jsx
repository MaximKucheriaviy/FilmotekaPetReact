import styled from "styled-components";

export const  LoginFormStyled = styled.form`
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 5px 5px 30px #0000007b;
    border: 2px solid #FF6B01;
    /* text-align: center; */

    & h2{
        font-weight: 900;
        /* font-size: 20px; */
       
    }

    & .topBlock{
        border-bottom: 1px solid black;
        margin-bottom: 40px;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    & .errorMessage{
        color: red;
        font-size: 14px;
        font-weight: 800;
    }

    & input{
        margin-top: 10px;
        margin-bottom: 40px;
        width: 400px;
        display: block;
        height: 40px;
        padding-left: 20px;
        border-radius: 10px;
        border: 1px solid #FF001B;
        &:focus{
            outline: none;
            border: 1px solid #0099ff;
        }
    }
    & label{
        display: block;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 14px;
    }

    & .buttonContainer{
        text-align: center;
    }
    & button{
        border: 1px solid #000000;
        border-radius: 5px;
        width: 148px;
        height:42px;
        background-color: transparent;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;

        color: black;
        &:last-child{
            margin-left: 16px;
        }
        &:hover{
            box-shadow: 0px 0px 10px #FF6B01;
        }
        &.active{
            background-color: #FF6B01;
            border: none;
            color: white;
        }
    }
`