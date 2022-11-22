import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaWhileloop(){
    return (
        <>
            <div>
            <h1>Java While Loop</h1>
                <hr />
                <p>
                    The Java while loop is used to iterate a part of the program repeatedly until the specified Boolean condition is true. As soon as the Boolean condition becomes false, the loop automatically stops.
                </p>
                <p>
                    The while loop is considered as a repeating if statement. If the number of iteration is not fixed, it is recommended to use the while loop.
                </p>
                <div>
                    <ol>
                        <li><b>Initialization:</b> It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.</li>
                        <li><b>Condition:</b> It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.</li>
                        <li><b>Increment/Decrement:</b> It increments or decrements the variable value. It is an optional condition.</li>
                        <li><b>Statement:</b> The statement of the loop is executed each time until the second condition is false.</li>
                    </ol>
                </div>

                <h4>Flowchart of Java While Loop</h4>
                <p>
                    Here, the important thing about while loop is that, sometimes it may not even execute. If the condition to be tested results into false, the loop body is skipped and first statement after the while loop will be executed.
                </p>

                <h4>Java Infinitive While Loop</h4>
            </div>
        </>
    )
}

export default JavaWhileloop;