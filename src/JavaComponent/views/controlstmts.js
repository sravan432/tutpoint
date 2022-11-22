import React from "react"
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function ControlStmts(){
    return (
        <>
            <div>
            <h1>Java Control Statements | Control Flow in Java</h1>
                <hr />

                <ul>
                    <li>Java compiler executes the code from top to bottom (line by line).</li>
                    <li>However, Java provides statements that can be used to control the flow of Java code. Such statements are called control flow statements.</li>
                    <li>It is one of the fundamental features of Java, which provides a smooth flow of program.</li>
                </ul>


                <p>Java provides three types of control flow statements.</p> 

                <p><b>1) Decision Making statements</b></p>
                <ul>
                    <li>if statements</li>
                    <li>switch statement</li>
                </ul>


                <p><b>2) Loop statements</b></p>
                <ul>
                    <li>for loop</li>
                    <li>while loop</li>
                    <li>do while loop</li>
                    <li>for-each loop</li>
                </ul>


                <p><b>3) Jump statements</b></p>
                <ul>
                    <li>break statements</li>
                    <li>continue statement</li>
                </ul>
            </div>
        </>
    )
}

export default ControlStmts;