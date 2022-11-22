import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";
import image1 from "../../Assets/Images/variablesmemory.png";
import image2 from "../../Assets/Images/variabletypes.png";

function JavaVariables() {
    return (
        <>
            <div>
                <h1>Java Variables</h1>

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

                <p>A variable (vary + able) is a container which holds the value while the Java program
                    is executed.
                </p>
                <p>
                    A variable is assigned with a data type. Variable is a name of a reserved area allocated in memory.
                </p>
                <p>Variable (vary + able) Means that we can able to vary the value stored in memory.</p>
                <p>
                    There are three types of variables in java:
                    <ol>
                        <li>Local Variables</li>
                        <li>Instance Variables</li>
                        <li>Static Variables</li>
                    </ol>
                </p>
                <hr />
                <h3>Declaring (Creating) Variables</h3>
                <div className="syntax">
                    <h5>Syntax : </h5>
                    <p><i>type variableName = value;</i></p>
                </div>
                <br />
                <p>
                    <pre>
                        type       : One of the java data types. <br />
                        variableName : Name of the variable. <br />
                        =         : used to assigning value to the variable.
                    </pre>
                </p>
                <div className="example">
                    <h5>Example :
                        <p>
                            int x = 20; <br />
                            float myFloatNum = 5.99f; <br />
                            char myLetter = 'D'; <br />
                            boolean myBool = true; <br />
                            String myText = "Hello";

                        </p>
                    </h5>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <img src={image1} alt="memory allocation"></img>
                </div>
                <hr />
                <h3>Types Of Variables : </h3>
                <p>
                    There are three types of variables in java:
                    <ol>
                        <li>Local Variables</li>
                        <li>Instance Variables</li>
                        <li>Static Variables</li>
                    </ol>
                </p>
                <div style={{ textAlign: "center" }}>
                    <img src={image2} alt="memory allocation"></img>
                </div>

                <h5>1) Local Variables</h5>
                <p>A variable declared inside the body of the method is called local variable. You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists.
                    <br />
                    A local variable cannot be defined with "static" keyword.</p>

                <h5>2) Instance Variables</h5>
                <p>A variable declared inside the class but outside the body of the method, is called an instance variable. It is not declared as static
                    .
                    <br />
                    It is called an instance variable because its value is instance-specific and is not shared among instances.</p>

                <h5>3) Static Variables</h5>
                <p>A variable that is declared as static is called a static variable. It cannot be local. You can create a single copy of the static variable and share it among all the instances of the class. Memory allocation for static variables happens only once when the class is loaded in the memory.</p>


                <br /><br />
                <hr />
                <h3>Printing Variables :</h3>
                <p>
                    The println() method is often used to display variables.<br />

                    To combine both text and a variable, use the + character:
                </p>
                <div className="example">
                    <h5>Example :
                        <p>
                            String name = "John"; <br /><br />
                            System.out.println("Hello " + name);
                        </p>
                    </h5>
                </div>

                <br />
                <hr />
                <h3>Identifiers : </h3>
                <p style={{ lineHeight: "2", paddingLeft: "25px" }}>
                    All Java variables must be identified with unique names. <br />
                    These unique names are called identifiers. <br />
                    Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume). <br />
                    Note: It is recommended to use descriptive names in order to create understandable and maintainable code: <br />
                </p>

                <h5>The general rules for naming variables are:</h5>
                <p>
                    <ul>
                        <li>Names can contain letters, digits, underscores, and dollar signs</li>
                        <li>Names must begin with a letter</li>
                        <li>Names should start with a lowercase letter and it cannot contain whitespace</li>
                        <li>Names can also begin with $ and _ (but we will not use it in this tutorial)</li>
                        <li>Names are case sensitive ("myVar" and "myvar" are different variables)</li>
                        <li>Reserved words (like Java keywords, such as int or boolean) cannot be used as names</li>
                    </ul>
                </p>

                <div className="example">
                    <h5>Example :
                        <p>
                        // Good <br />
                            int minutesPerHour = 60; <br /><br />

                            // OK, but not so easy to understand what m actually is <br />
                            int m = 60;
                        </p>
                    </h5>
                </div>


                <hr />

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

                <br />
                <br />
            </div>
        </>
    )
}

export default JavaVariables;