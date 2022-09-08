import { Component } from "react";
import css from "./header-style.module.scss";
import icon from "./images/symbol-defs.svg";
import Button from "../button/Button";


class Header extends Component{ 
    // constructor(propos){
    //     super(propos);
    // }
    render(){
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
                    <ul className={css.libButtonList}>
                        <li><Button text={"Watched"} boxShape={css.buttonBox} themeType={true}/></li>
                        <li><Button text={"Qeuee"} boxShape={css.buttonBox} themeType={true} shadowed={true} isActive={true}/></li>     
                    </ul>
                    }
                </div>
            </header>
        )
    }
}


export default Header