import { Component } from "react";
import css from "./header-style.module.scss";
import icon from "./images/symbol-defs.svg";


class Header extends Component{ 
    // constructor(propos){
    //     super(propos);
    // }
    render(){
        console.log(css);
        return(
            <header className={css.header}>
                <div className={'container ' + css.container}>
                    <nav className={css.navigation}>
                        <button className={css.logoButton}>
                            <svg className={css.icon}>
                                <use href={icon + '#icon-film'}></use>
                            </svg>
                            <h1 className={css.title}>Filmoteka</h1>  
                        </button>     
                        <ul className={css.buttonList}>
                            <li>
                                <button type="button">Home</button>
                            </li>
                            {this.props.type === "autorised" ? <li><button type="button">My library</button></li> : <li><button>Log in</button></li>}
                        </ul>
                    </nav>
                    {this.props.formType === "SearchForm" ?
                    <form className={css.searchForm} action="">
                        <input type="text" />
                        <button type="submit">
                            <svg>
                                <use href={icon + "#icon-search"}></use>
                            </svg>
                        </button>
                    </form>   
                    :
                    <div>
                        <ul>
                            <li><button type="button">Watched</button></li>
                            <li><button type="button">Queue</button></li>     
                        </ul>
                    </div> 
                    }
                </div>
            </header>
        )
    }
}


export default Header