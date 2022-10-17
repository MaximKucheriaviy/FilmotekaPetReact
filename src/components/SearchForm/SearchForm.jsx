import { useState } from "react"
export const SearchForm = () => {

    const [keyword, setKeyWord] = useState("");
    const chageHendler = event => {
        const {value} = event.target;
        setKeyWord(value);
    }
    return(
        <form>
            <input 
                type="text"
                name="search"
                id="search" 
                onChange={chageHendler}
                value={keyword}
            />
            <button type="submit">submit</button>
        </form>
    )
}