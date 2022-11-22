import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaSwitch() {
    return (
        <>
            <div>
                <h1>Java Switch Statement</h1>

                <ul>
                    <li>
                        The Java switch statement executes one statement from multiple conditions.
                    </li>
                    <li>
                        It is like if-else-if ladder statement.
                    </li>
                    <li>
                        The switch statement works with byte, short, int, long, enum types, String and some wrapper types like Byte, Short, Int, and Long.
                    </li>
                    <li>
                        Since Java 7, you can use strings in the switch statement.
                    </li>
                </ul>

                <h3>Points to Remember</h3>

                <ul>
                    <li>There can be <em>one or N number of case values</em> for a switch expression.</li>
                    <li>The case value must be of switch expression type only. The case value must be <em>literal or constant</em>. It doesn't allow .</li>
                    <li>The case values must be <em>unique</em>. In case of duplicate value, it renders compile-time error.</li>
                    <li>The Java switch expression must be of <em>byte, short, int, long (with its Wrapper type),  and string</em>.</li>
                    <li>Each case statement can have a <em>break statement</em> which is optional. When control reaches to the break statement, it jumps the control after the switch expression. If a break statement is not found, it executes the next case.</li>
                    <li>The case value can have a <em>default label</em> which is optional.</li>
                </ul>
            </div>
        </>
    )
}

export default JavaSwitch;