import { useState, useEffect } from "react"


export const useWindowSize = () => {
    const [width, setWidth] = useState(document.documentElement.clientWidth)
    const [height, setHeight] = useState(document.documentElement.clientHeight)
    const onResize = (event) => {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight)
    }
    useEffect(() => {
        window.addEventListener("resize", onResize)
        return () =>{
            window.removeEventListener("resize", onResize);
        }
    }, [])
    return{
        width,
        height
    }
}