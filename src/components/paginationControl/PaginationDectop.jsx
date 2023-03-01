export const PaginationDescTop = ({setPage, totalPages, page}) =>{
    const buttons = [];
    if(totalPages < 10){
        for(let i = 1; i < totalPages; i++){
            buttons.push(i);
        }
    }
    else{
        if(page < 6){
            for(let i = 1; i < 8; i++){
                buttons.push(i);
            }
            buttons.push("...");
            buttons.push(totalPages);
        }
        else if(page > totalPages - 6){
            buttons.push(1);
            buttons.push("...");
            for(let i = totalPages - 6; i <= totalPages; i++){
                buttons.push(i);
            }
        }
        else{
            buttons.push(1);
            buttons.push("...");
            buttons.push(page - 2);
            buttons.push(page - 1);
            buttons.push(page);
            buttons.push(page + 1);
            buttons.push(page + 2);
            buttons.push("...");
            buttons.push(totalPages);
        }
    }
    return <>
        {buttons.map((item, index ) => <button key={index} className={item === page ? "active" : ""} onClick={() => setPage(item)}>{item}</button>)}
    </>
}