import { StyledPagination } from "./PaginationControlStyld";
import {ReactComponent as LefrArrow} from "./assets/arrowLeft.svg";
import {ReactComponent as RigntArrow} from "./assets/arrowRight.svg"
import { useWindowSize } from "../../secvices/hooks/useWindowSize";
import { PaginationDescTop } from "./PaginationDectop";



export const PaginationSystem = ({setPage, totalPages, page}) => {
    const {width} = useWindowSize();
    const leftArrowClickHandler = () => {
        setPage(prev => prev - 1);
    }
    const rightArrowClickHandler = () => {
        setPage(prev => prev + 1);
    }
    return <StyledPagination>
        <button onClick={leftArrowClickHandler}>
            <LefrArrow></LefrArrow>
        </button>
        {(width >= 1280) && <PaginationDescTop setPage={setPage} totalPages={totalPages} page={page}/>}
        <button onClick={rightArrowClickHandler}>
            <RigntArrow></RigntArrow>
        </button>
    </StyledPagination>
}