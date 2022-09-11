import { Component } from "react";

import Header from "./components/header/header";
import FilmList from "./components/FilmList/FilmList";
import TMDB from './js/themoviedbAPI';
const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filmsArray: []
    }
  }
  componentDidMount(){
    api.getTrendings()
    .then(data => {
      console.log(data);
      this.setState({
        filmsArray: data.results
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  render(){
    return (
      <div className="App">
        <Header type={"autorised"} formType={"SearchasdForm"}/>
        <section>
            <h2>Film list</h2>
            <FilmList films={this.state.filmsArray}/>
        </section>
      </div>
    );
    }
}

export default App;
