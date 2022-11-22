import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaForLoop() {
    return (
        <>
            <div>
                <h1>Java For Loop</h1>
                <p>When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop.</p>
                <p>Loops are handy because they save time, reduce errors, and they make code more readable.</p>
                <div className="syntax">
                    Syntax :
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

                <h2>Java Nested for Loop</h2>
                <p>If we have a for loop inside the another loop, it is known as nested for loop. The inner loop executes completely whenever outer loop executes.</p>

                <h2>Java for-each Loop</h2>
                <p>The for-each loop is used to traverse array or collection in Java. It is easier to use than simple for loop because we don't need to increment value and use subscript notation.</p>
                <p>It works on the basis of elements and not the index. It returns element one by one in the defined variable.</p>


                <h2>Java Infinitive for Loop</h2>
                <p>If you use two semicolons ;; in the for loop, it will be infinitive for loop.</p>
            </div>
        </>
    )
}

export default JavaForLoop;