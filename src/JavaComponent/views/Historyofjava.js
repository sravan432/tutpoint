import React from "react";
import { NavLink } from "react-router-dom";

function HistoryOfJava() {

    const code =
        'class Simple {                                    \n\
    public static void main(String[] args){        \n\
        System.out.println("Hello World");         \n\
    }                                              \n\
}                                                   \
        ';


    return (
        <>
            <div>
                <h1>History Of Java</h1>
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
                <div>
                    <pre>
                        Simple.java

                        class Simple {"{"} <br />
                        <span></span>    public static void main(String args[]) {"{"}<br />
                        <span></span><span></span>      System.out.println(&quot;Hello Java&quot;);  <br />
                        <span></span>   {"}"}  <br />
                        {"}"}
                    </pre>
                    <pre className="code">
                        <h5>Sample.java</h5>
                        <div>
                            {code}
                        </div>
                    </pre>
                </div>

            </div>
        </>
    )
}

export default HistoryOfJava;