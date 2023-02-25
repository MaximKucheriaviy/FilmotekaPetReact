import { StyledPagination } from "./PaginationControlStyld";
import {ReactComponent as LefrArrow} from "./assets/arrowLeft.svg";
import {ReactComponent as RigntArrow} from "./assets/arrowRight.svg"
import { useWindowSize } from "../../secvices/hooks/useWindowSize";



export const PaginationSystem = ({setPage, totalPages}) => {
    const {width} = useWindowSize();
    const leftArrowClickHandler = () => {
        setPage(prev => prev - 1);
    }
    const rightArrowClickHandler = () => {
        setPage(prev => prev + 1);
    }
    return <StyledPagination>
        {(width >= 1280) && 
        <button onClick={leftArrowClickHandler}>
            <LefrArrow></LefrArrow>
        </button>}
        <button onClick={() => setPage(1)}>
            1
        </button>
        <button onClick={() => setPage(totalPages)}>
            {totalPages}
        </button>
        {(width >= 1280) && 
        <button onClick={rightArrowClickHandler}>
            <RigntArrow></RigntArrow>
        </button>}
    </StyledPagination>
}