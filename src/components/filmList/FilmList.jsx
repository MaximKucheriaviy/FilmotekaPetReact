import { FilmCard } from "./filmCard/FilmCard"
import { List } from "./FilmListStyled"

export const FilmList = ({cards}) => {
    return <section>
        <List>
            {cards.map(item => <li key={item.id}><FilmCard  filmInfo={item}/></li>)}
        </List>
    </section>
}