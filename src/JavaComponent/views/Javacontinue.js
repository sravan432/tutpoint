import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaContinue() {
    return (
        <>
            <div>
                <h1>
                    Java Continue Statement
                </h1>

                <div>
                    <ul>
                        <li>The continue statement is used in loop control structure when you need to jump to the next iteration of the loop immediately. It can be used with for loop or while loop</li>
                        <li>The Java continue statement is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition. In case of an inner loop, it continues the inner loop only.</li>
                        <li>We can use Java continue statement in all types of loops such as for loop, while loop and do-while loop.</li>
                    </ul>
                </div>
                <div className="syntax">
                    Syntax :
                    <p>
                        continue;
                    </p>
                </div>
            </div>
        </>
    )
}

export default JavaContinue;