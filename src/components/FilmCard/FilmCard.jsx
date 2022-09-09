import style from ".FilmCard.module.scss";
import { Component } from "react";

class FilmCard extends Component{
    render(){
        return(
            <button type="button">
                <img src={this.props.poster} alt="Poster" />
                <h3>{this.props.title}</h3>
                <p>{this.props.janres} | {this.props.year}</p>
            </button>
        )
    }
}

export default FilmCard