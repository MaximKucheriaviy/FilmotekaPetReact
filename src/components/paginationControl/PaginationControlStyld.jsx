import styled from "styled-components";

export const StyledPagination = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 40px;
    @media screen and (min-width: 768px) {
        margin-top: 60px;
    }

    & button{
        width: 40px;
        height: 40px;

        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 5px;

        &:hover{
            background-color: gray;
        }

        & svg{
            width: 16px;
            height: 16px;
            display: inline-block;
        }

        &.active{
            background-color: #FF6B08;
        }
    }
`