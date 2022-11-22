import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaIfElse() {
    return (
        <>
            <div>
                <h1>Java if-else Statement</h1>
                <hr />

                The Java if statement is used to test the condition. It checks boolean condition: true or false. There are various types of if statement in Java. <br />
                You can use conditional operators to perform different actions for different decisions.
                <ul>
                    <li>
                        if statement
                    </li>
                    <li>
                        if-else statement
                    </li>
                    <li>
                        if-else-if statement
                    </li>
                    <li>
                        nested if statement
                    </li>
                </ul>


                <h2>1) Java if Statement</h2>
                <p>The Java if statement tests the condition. It executes the if block if condition is true.</p>
                <div className="syntax">
                    Syntax:
                    <p>
                        ssssss
                    </p>
                </div>

                <h4>Flowchart</h4>

                <p>/// flowchart attache</p>

                <div className="example">
                    example
                    <p>
                        Example Code
                    </p>

                </div>

                <h2>2) Java if-else Statement</h2>
                <p>The Java if-else statement also tests the condition. It executes the if block if condition is true otherwise else block is executed</p>
                <p>Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.</p>
                <div className="syntax">
                    Syntax :
                    <p>
                        <pre>
                            if(condition){"{"} <br />
                            <span />    //code if condition is true<br />
                            {"}"}else{"{"}<br />
                            <span />    //code if condition is false<br />
                            {"}"}
                        </pre>
                    </p>
                </div>

                <h3>Using Ternary Operator</h3>
                <p>We can also use ternary operator (? :) to perform the task of if...else statement. It is a shorthand way to check the condition. If the condition is true, the result of ? is returned. But, if the condition is false, the result of : is returned.</p>
                <div className="syntax">
                    Syntax :
                    <p>
                        cond ? //stmt if true : //stmt if false
                    </p>
                </div>


                <h2>3) Java if-else-if ladder Statement</h2>
                <p>The if-else-if ladder statement executes one condition from multiple statements. </p>
                <p>
                    Use the else if statement to specify a new condition if the first condition is false.
                </p>
                <div className="syntax">
                    Syntax :
                    <p>
                        else if else if
                    </p>
                </div>


                <h3>Java Nested if statement</h3>
                <p>The nested if statement represents the if block within another if block. Here, the inner if block condition executes only when outer if block condition is true.</p>

                <div className="syntax">
                    Syntax :
                    <p>
                        ifff nested
                    </p>
                </div>
            </div>
        </>
    )
}

export default JavaIfElse;