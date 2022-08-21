import React from "react";
import End from "./End";
import Headers from "./Headers";

const Layout=({children})=>{
    return(
        <div>
            <Headers/>
            {children}
            {/* <End/> */}
        </div>
    )
}
export default Layout