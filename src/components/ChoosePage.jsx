import React from "react";
import classNames from "classnames";

const ChoosePage = (props) => {
    const {currentPage, nextPage, prevPage} = props;

    return (
        <div className="mb-4">
            <ul className="list-group list-group-horizontal-md">
                <li className={classNames("list-group-item", {"active": currentPage > 1})} style={{cursor: "pointer"}} onClick={prevPage}>Назад</li>
                <li className=
                {classNames("list-group-item", {"active": currentPage === 1})}
                >1</li>
                <li className="list-group-item" 
                style={currentPage - 1 > 1 ? {display: "inline"} : {display: "None"}}
                >...</li>
                <li className="list-group-item active" 
                style={currentPage !== 1 && currentPage !== 500 ? {display: "inline"} : {display: "None"}}
                >{currentPage}</li>
                <li className="list-group-item" 
                style={500 - currentPage > 1 ? {display: "inline"} : {display: "None"}}
                >...</li>
                <li className=
                {classNames("list-group-item", {"active": currentPage === 500})}
                >500</li>
                <li className={classNames("list-group-item", {"active": currentPage < 500})} style={{cursor: "pointer"}} onClick={nextPage}>Вперед</li>
            </ul>
        </div>
    )
}

export default ChoosePage;