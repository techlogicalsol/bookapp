import React from "react";

function Header({query, setQuery, maxResults, setMaxResults, startIndex, setStartIndex, handleSubmit}){



    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 hero_img">
                    <h1 className="display-2 text-center" style={{zIndex: 2}}>
                        Google Books
                    </h1>

                    <div className="row">
                        <div className="col-md-6 mx-auto myform2">

                 
                    <div className="myform">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Book Search"
                            value={query}
                            onChange={e=> setQuery(e.target.value)}

                            />

                    <button className="btn btn-dark" 
                    onClick={handleSubmit}>
                        <i class="fas fa-search"></i>
                    </button>
                 
                    </div>
                  


                    <div className="myform1">

                        <div className="form-group">
                            <label htmlFor="maxResults">Max-Results</label>
                            <input
                                type="number"
                                className="form-control"
                                id="maxResults"
                                placeholder="Max Results"
                                value={maxResults}
                                onChange={e=> setMaxResults(e.target.value)}
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startIndex">Start Index</label>
                            <input
                                type="number"
                                className="form-control"
                                id="startIndex"
                                placeholder="Start Index"
                                value={startIndex}
                                onChange={e=> setStartIndex(e.target.value)}
                                />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Header