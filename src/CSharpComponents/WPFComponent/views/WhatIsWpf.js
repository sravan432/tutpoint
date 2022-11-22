import React from "react";
import "../../../Assets/CSS/pages.css";
import { NavLink } from "react-router-dom";


function WhatIsWpf() {
    return (
        <>
            <div>
                <h1>WPF Tutorial</h1>
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

                <p>
                    <ul>
                        <li>WPF stands as <b>Windows Presentation Foundation</b>.</li>
                        <li> WPF is known as the robust framework while we are thinking of creating the Windows application.</li>
                        <li>WPF is also known as the evolution over the WinForms.</li>
                        <li>WPF provides us the separations between the User Interface and the business logic.</li>
                        
                    </ul>
                    <p>
                        <b>Advantages :</b>
                        
                        <ul>
                            <li>we could develop a rich user interface, rich color, and animations with the minimum complexity of the code.</li>
                            <li>It produces the graphical display for the windows, which can be efficiently operated.</li>
                            <li>We can quickly deploy the WPF application as the standalone desktop program.</li>
                            <li>We can host the WPF application in the form of an embedded object on a website.</li>
                        </ul> 
                    </p>
                </p>

                <h3>Prerequisites</h3>
                <p>
                Before proceeding with the WPF tutorial, we should have basic knowledge of XML, Web technology, the HTML and also c#.
                </p>





















            </div>
        </>
    )
}

export default WhatIsWpf;