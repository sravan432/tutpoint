
import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function WhatIsJava() {
    return (
        <>
            <div>

                <h1>Java Introduction</h1>


                <button className="nextbutton" title="History Of Java">
                    <NavLink
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                        to="/java/historyofjava">
                        NEXT
                    </NavLink>
                </button>
                <br />
                <hr />
                <h2>What is Java?</h2>

                <div>
                    <p>
                        <ul>
                            <li>Java is a <b>programming language</b> and a <b>platform</b>.</li>
                            <li>It is owned by Oracle, and more than 3 billion devices run Java.</li>
                            <li>Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995.</li>
                            <li>Java is a high level, robust, object-oriented and secure programming language. </li>
                        </ul>
                        James Gosling is known as the father of Java. Before Java, its name was Oak.
                        Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.<br />
                        <b>Why it is Called Platform:</b> Any hardware or software environment in which a program runs, is known as a platform.
                        Since Java has a runtime environment (JRE) and API, it is called a platform.
                    </p>
                    <h2>Applications</h2>
                    <p>
                        According to Sun, 3 billion devices run Java. There are many devices where Java is currently used. Some of them are as follows:
                    </p>
                    <ol>
                        <li>Desktop Applications such as acrobat reader, media player, antivirus, etc.</li>
                        <li>Web Applications such as irctc.co.in, javatpoint.com, etc.</li>
                        <li>Enterprise Applications such as banking applications.</li>
                        <li>Mobile Applications (specially Android apps)</li>
                        <li>Web servers and application servers</li>
                        <li>Embedded System</li>
                        <li>Smart Card</li>
                        <li>Robotics</li>
                        <li>Games, etc.</li>
                    </ol>


                    <p>

                        Java Example
                        Let's have a quick look at Java programming example. A detailed description of Hello Java example is available in next page.
                    </p>


                    <pre>
                        Simple.java

                        class Simple {"{"} <br />
                        <span></span>    public static void main(String args[]) {"{"}<br />
                        <span></span><span></span>      System.out.println(&quot;Hello Java&quot;);  <br />
                        <span></span>   {"}"}  <br />
                        {"}"}
                    </pre>


                    <h3>Java Platforms / Editions</h3>
                    <p>There are 4 platforms or editions of Java:</p>

                    <h5>1) Java SE (Java Standard Edition)</h5>
                    <p>It is a Java programming platform. It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math etc. It includes core topics like OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc.</p>

                    <h5>2) Java EE (Java Enterprise Edition)</h5>
                    <p>It is an enterprise platform that is mainly used to develop web and enterprise applications. It is built on top of the Java SE platform. It includes topics like Servlet, JSP, Web Services, EJB, JPA, etc.</p>

                    <h5>3) Java ME (Java Micro Edition)</h5>
                    <p>It is a micro platform that is dedicated to mobile applications.</p>

                    <h5>4) JavaFX</h5>
                    <p>It is used to develop rich internet applications. It uses a lightweight user interface API.</p>

                    <hr />
                    <br />
                    <button className="nextbutton" title="History Of Java">
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                            to="/java/historyofjava">
                            NEXT
                        </NavLink>
                    </button>
                    <br />
                    <br />

                </div>

            </div>
        </>
    )
}

export default WhatIsJava;