import styled from "styled-components"

export const List = styled.div`
    display: grid;
    grid-gap: 10px;
    width: 100%;
    grid-template-columns: 280px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 336px 336px;
    }
    @media screen and (min-width: 1280px) {
        grid-template-columns: 395px 395px 395px;
    }
`