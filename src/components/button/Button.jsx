import style from "./Button.module.scss";
import { Component } from "react";
import clsx from "clsx";


class Button extends Component{
    render(){
        return(
            <button type="button" className={clsx(
                style.button,
                this.props.themeType ? style.whiteType : style.blackType,
                this.props.shadowed && style.shadowed,
                this.props.isActive && style.activeButton,
                this.props.boxShape
            )}>{this.props.text}</button>
        )
    }
}

export default Button