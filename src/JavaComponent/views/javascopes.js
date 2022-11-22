import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaScopes() {

    return (
        <>
            <div>
                <h2>Java Scope</h2>

                <h3>Method Scope</h3>
                <p>Variables declared directly inside a method are available anywhere in the method</p>

                <h3>Block Scope</h3>
                <p>A block of code refers to all of the code between curly braces { }.</p>
                <p>Variables declared inside blocks of code are only accessible by the code between the curly braces, which follows the line in which the variable was declared:</p>

            </div>
        </>
    )
}

export default JavaScopes;