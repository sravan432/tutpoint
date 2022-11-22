import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function JavaTypeCasting() {

    
    return (
        <>
            <div>
                <h1>Type Casting in Java</h1>
                <div>
                    <button className="previousbutton" title="What Is Java">
                        <NavLink
                            style={{ textDecoration: "none", color: "white" }}
                            to="/java/whatisjava">
                            PREVIOUS
                        </NavLink>

                    </button>
                    <button className="nextbutton" title="Features Of Java">
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                            to="/java/featuresofjava">
                            NEXT
                        </NavLink>
                    </button>
                </div>
                <hr />
                <p>Type casting is when you assign a value of one primitive data type to another type.</p>
                <p>There are 2 types of TypeCasting : </p>
                <ul>
                    <li><b>Widening Casting (automatically)</b> - converting a smaller type to a larger type size<br />
                        byte {"->"} short {"->"} char {"->"} int {"->"} long {"->"} float {"->"} double</li>
                    <li><b>Narrowing Casting (manually)</b> - converting a larger type to a smaller size type <br />
                        double {" ->"} float {" ->"} long {" ->"} int {" ->"} char {" ->"} short {" ->"} byte</li>
                </ul>

                <hr />
                <h4>Java Variable Example: Overflow</h4>
                <hr />
                <h4>Java Variable Example: Adding Lower Type</h4>
            </div>
        </>
    )
}

export default JavaTypeCasting;