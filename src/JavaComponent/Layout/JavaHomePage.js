import React from "react";
import HomeLayout from "../../Layout/HomeLayout";
import routes from "./routes.js";
import headers from "./headers.js";


function JavaHomePage(){
    return (
        <>
            <HomeLayout routes={routes} headers={headers}/>
        </>
    )
}

export default JavaHomePage;