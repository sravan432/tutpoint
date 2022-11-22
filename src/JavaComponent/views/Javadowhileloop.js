import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaDoWhile(){
    return (
        <>
            <div>
            <h1>
                    Java do-while Loop
                </h1>
                <hr />
                <p>
                    The Java do-while loop is used to iterate a part of the program repeatedly, until the specified condition is true. If the number of iteration is not fixed and you must have to execute the loop at least once, it is recommended to use a do-while loop.
                </p>
                <p>
                    Java do-while loop is called an exit control loop. Therefore, unlike while loop and for loop, the do-while check the condition at the end of loop body. The Java do-while loop is executed at least once because condition is checked after loop body.
                </p>


                <div className="syntax">
                    Sytanx :
                    <p>
                        dscds
                    </p>
                </div>
                <div>
                    <ol>
                        <li><b>Initialization:</b> It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.</li>
                        <li><b>Condition:</b> It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.</li>
                        <li><b>Increment/Decrement:</b> It increments or decrements the variable value. It is an optional condition.</li>
                        <li><b>Statement:</b> The statement of the loop is executed each time until the second condition is false.</li>
                    </ol>
                </div>


                <h3>Java Infinitive do-while Loop</h3>

                <p>If you pass true in the do-while loop, it will be infinitive do-while loop.</p>

                <div className="syntax">
                    Syntax :
                    <p>
                        dsvf
                    </p>
                </div>
            </div>
        </>
    )
}

export default JavaDoWhile;