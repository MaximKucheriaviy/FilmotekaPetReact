import { ButtonsContainer } from "./HeaderButtonsStyled";

export const HeaderButtons = ({libraryType}) => {
    return <ButtonsContainer>
        <button type="button" className={libraryType && `active`}>wached</button>
        <button type="button" className={libraryType || `active`}>queue</button>
    </ButtonsContainer>
}