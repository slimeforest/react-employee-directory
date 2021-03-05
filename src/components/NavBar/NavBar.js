import React from 'react';
import Search from "../Search/Search"
import "../NavBar/NavBar.css"

function NavBar(){
    return(
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Employee Search: </div>
                <Search />
            </div>
        </div>
    )
}
export default NavBar;