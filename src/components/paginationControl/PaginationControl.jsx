import { StyledPagination } from "./PaginationControlStyld";
import {ReactComponent as LefrArrow} from "./assets/arrowLeft.svg";
import {ReactComponent as RigntArrow} from "./assets/arrowRight.svg"


export const PaginationSystem = () => {
    return <StyledPagination>
        <button>
            <LefrArrow></LefrArrow>
        </button>
        <button>
            <RigntArrow></RigntArrow>
        </button>
    </StyledPagination>
}