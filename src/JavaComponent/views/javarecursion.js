import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";


function Recursion() {

    return (
        <>
            <div>

                <h1>Java Recursion</h1>

                <p>Recursion is the technique of making a function call itself. This technique provides a way
                    to break complicated problems down into simple problems which are easier to solve.</p>
                <p>Recursion may be a bit difficult to understand. The
                    best way to figure out how it works is to experiment with it.</p>

                <h2>Halting Condition</h2>
                <p>Just as loops can run into the problem of infinite looping, recursive functions can run into
                    the problem of infinite recursion. Infinite recursion is when the function never stops calling
                    itself. Every recursive function should have a halting condition, which is the condition
                    where the function stops calling itself. In the previous example, the halting condition is
                    when the parameter <code>k</code> becomes 0.</p>
                <p>The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.</p>



            </div>
        </>
    )
}

export default Recursion;