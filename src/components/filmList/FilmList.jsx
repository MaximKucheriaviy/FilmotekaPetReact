import { FilmCard } from "./filmCard/FilmCard"
import { List } from "./FilmListStyled"
import { wrapGrid } from "animate-css-grid"
import { useEffect, useRef } from "react"

export const FilmList = ({cards}) => {
    const listRef = useRef(undefined);
    useEffect(() => {
        if(!listRef){
            return;
        }
        wrapGrid(listRef.current);
    }, [])
    return <section>
        <List ref={ref => listRef.current = ref}>
            {cards.map(item => <li key={item.id}><FilmCard  filmInfo={item}/></li>)}
        </List>
    </section>
}