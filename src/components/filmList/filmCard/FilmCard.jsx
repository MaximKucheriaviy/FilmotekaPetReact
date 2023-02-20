import { Card } from "./FilmCardStyled"
export const FilmCard = ({filmInfo}) => {
    const year = filmInfo.release_date.substring(0, 4);
    return <Card>
        <div className="imageThumb">
            <img src={filmInfo.poster_path} alt="Film backdrop" />
        </div>
        <h3>{filmInfo.title}</h3>
        {filmInfo.genre_ids.length > 2 && <p>{`${filmInfo.genre_ids[0]}, other... | ${year}`}</p>}
    </Card>
}