import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaBreak(){
    return (
        <>
            <div>
            <h1>Java Break Statement</h1>
                <div>
                    <ul>
                        <li>When a break statement is encountered inside a loop, the loop is immediately terminated and the program control resumes at the next statement following the loop.</li>
                        <li>The Java break statement is used to break loop or switch statement. It breaks the current flow of the program at specified condition. In case of inner loop, it breaks only inner loop.</li>
                        <li>We can use Java break statement in all types of loops such as for loop, while loop and do-while loop.</li>
                    </ul>
                </div>

                <div className="syntax">
                    Syntax :
                    <p>
                        break;
                    </p>
                </div>
            </div>
        </>
    )
}

export default JavaBreak;