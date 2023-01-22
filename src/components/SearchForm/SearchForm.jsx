import { useState } from "react"
import { StyledSearchForm } from "./SerchFormStyled";
import { AiOutlineSearch } from 'react-icons/ai';
export const SearchForm = () => {

    const [keyword, setKeyWord] = useState("");
    const chageHendler = event => {
        const {value} = event.target;
        setKeyWord(value);
    }
    return(
        <StyledSearchForm>
            <input 
                type="text"
                name="search"
                id="search" 
                onChange={chageHendler}
                value={keyword}
                placeholder="Movie search"
            />
            <button type="submit"><AiOutlineSearch className="search-icon" color="white"/></button>
        </StyledSearchForm>
    )
}