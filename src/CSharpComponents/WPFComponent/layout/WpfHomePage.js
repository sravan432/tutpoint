import React from "react";
import routes from "./routes.js";
import headers from "./headers.js";
import HomeLayout from "../../../Layout/HomeLayout.js";


function WpfHomePage(){
    return (
        <>
            <HomeLayout routes={routes} headers={headers}/>
        </>
    )
}

export default WpfHomePage;