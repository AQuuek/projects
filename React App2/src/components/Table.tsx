import React, {FC} from 'react';
import Cards from "./Cards";

const Table:FC = () => {

    return (
        <div>
            <div style={{height: '100px'}}/>
            <div className="pokerTable">
                <Cards/>
            </div>
            <div style={{height: '100px'}}/>
        </div>
    );
};

export default Table;