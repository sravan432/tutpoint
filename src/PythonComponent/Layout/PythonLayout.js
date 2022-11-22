import React from "react";
import HomeLayout from "../../Layout/HomeLayout.js";
import routes from "../Routes/routes.js"
import headers from "./headers.js";

function PythonHomePage(){
    return (
        <>
            <HomeLayout routes={routes} headers={headers}/>
        </>
    )
}

export default PythonHomePage;