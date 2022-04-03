import React from "react";

function Page({ nextPage, prevPage }) {
    return (
        <div className="btn"> 
            <button className="prev-btn" onClick={prevPage}>Prev</button>
            <button className="next-btn" onClick={nextPage}>Next</button>
        </div>
    );
}

export default Page;