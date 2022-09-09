import Header from "./components/header/header";
import FilmList from "./components/FilmList/FilmList";
import TMDB from './js/themoviedbAPI';
const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");
api.getTrendings();
function App() {
  return (
    <div className="App">
      <Header type={"autorised"} formType={"SearchasdForm"}/>
      <section>

      </section>
    </div>
  );
}

export default App;
