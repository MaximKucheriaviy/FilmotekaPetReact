export const useWindowSize = () => {
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    return{
        width,
        height
    }
}