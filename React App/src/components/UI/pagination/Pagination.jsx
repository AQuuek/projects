import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="pagination">
            {pagesArray.map(p =>
                <button
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? 'pageButton_active' : 'pageButton'}>
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;