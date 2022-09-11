// import style from "./FilmList.module.scss"
import FilmCard from "../FilmCard/FilmCard";
import { Component } from "react";

class FilmList extends Component{
    render(){
        return(
            this.props.films.map(({poster_path, title, year, id, genre_ids}) => <FilmCard key={id} poster={poster_path} title={title} year={year} genre_ids={this.genre_idsCutter(genre_ids)}/>)
        )
    }
    genre_idsCutter(genre_ids =[]){
        if(genre_ids.length > 3){
            genre_ids = genre_ids.slice(2);
            genre_ids.push("other");
        }
        return(genre_ids.join(" "));
    }
}

export default FilmList;