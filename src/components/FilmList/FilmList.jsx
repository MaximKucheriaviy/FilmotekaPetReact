// import style from "./FilmList.module.scss"
import FilmCard from "../FilmCard/FilmCard";
import { Component } from "react";

class FilmList extends Component{
    render(){
        return(
            this.props.films.map(({poster, title, year}) => <FilmCard poster={poster} title={title} year={year}/>)
        )
    }
}

export default FilmList;