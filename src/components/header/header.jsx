import { Component } from "react";
// import css from "./header-style.modele.css";

class Header extends Component{
    // constructor(propos){
    //     super(propos);
    // }
    render(){
        return(
            <header>
                <div className="container">
                    <nav>
                        <h1>Filmoteka</h1>       
                        <ul>
                            <li>
                                <button type="button">Home</button>
                            </li>
                            {this.props.type === "autorised" ? <li><button type="button">My library</button></li> : <li><button>Log in</button></li>}
                        </ul>
                    </nav>
                </div>
                {this.props.formType === "SearchForm" ?
                <form action="">
                    <input type="text" />
                    <button type="submit">submit</button>
                </form>   
                :
                <div>
                    <ul>
                        <li><button type="button">Watched</button></li>
                        <li><button type="button">Queue</button></li>     
                    </ul>
                </div> 
                }
            </header>
        )
    }
}


export default Header