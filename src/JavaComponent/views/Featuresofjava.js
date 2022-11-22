import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";
import featuresimage from "../../Assets/Images/javafeatures.png";

function FeaturesOfJava() {
    return (
        <>
            <div>
                <h1>Features of Java</h1>

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
                    The main objective of creating <b>Java programming </b>
                    language was to make it portable, simple and secure programming language. Apart from this, there are also some excellent features which play an important role in the popularity of this language. <br />
                    The features of Java are also known as Java buzzwords.
                </p>

                {/* <ol>
                    <li>Simple</li>
                    <li>Object-Oriented</li>
                    <li>Portable</li>
                    <li>Platform independent</li>
                    <li>Secured</li>
                    <li>Robust</li>
                    <li>Architecture neutral</li>
                    <li>Interpreted</li>
                    <li>High Performance</li>
                    <li>Multithreaded</li>
                    <li>Distributed</li>
                    <li>Dynamic</li>
                </ol> */}
                <img src={featuresimage} alt="Features" width={600} height={400} style={{ paddingLeft: "150px" }}></img>
                <hr />

                <h5>1) Object-oriented</h5>
                <p>Java is an object-oriented
                    programming language. Everything in Java is an object. Object-oriented means we organize our software as a combination of different types of objects that incorporate both data and behavior.


                    Object-oriented programming (OOPs) is a methodology that simplifies software development and maintenance by providing some rules.
                    <br /><br />
                    <p>Basic concepts of OOPs are: <br /><br />
                        <ul>
                            <li>Object</li>
                            <li>Class</li>
                            <li>Inheritance</li>
                            <li>Polymorphism</li>
                            <li>Abstraction</li>
                            <li>Encapsulation</li>
                        </ul>
                    </p>
                </p>
                <hr />
                <h5>2) Simple</h5>
                <p>Java is very easy to learn, and its syntax is simple, clean and easy to understand. According to Sun Microsystem, Java language is a simple programming language because:</p>

                <ul>
                    <li>Java syntax is based on C++ (so easier for programmers to learn it after C++).</li>
                    <li>Java has removed many complicated and rarely-used features, for example, explicit pointers, operator overloading, etc.</li>
                    <li>There is no need to remove unreferenced objects because there is an Automatic Garbage Collection in Java.</li>
                </ul>
                <hr />
                <h5>3) Secured</h5>
                <p>
                    Java is best known for its security. With Java, we can develop virus-free systems. Java is secured because:
                    <ul>
                        <li><b>No explicit pointer</b></li>
                        <li><b>Java Programs run inside a virtual machine sandbox</b></li>
                        <li><b>Classloader:</b> Classloader in Java is a part of the Java Runtime Environment (JRE) which is used to load Java classes into the Java Virtual Machine dynamically. It adds security by separating the package for the classes of the local file system from those that are imported from network sources.</li>
                        <li><b>Bytecode Verifier:</b> It checks the code fragments for illegal code that can violate access rights to objects.</li>
                        <li><b>Security Manager:</b> It determines what resources a class can access such as reading and writing to the local disk.</li>
                    </ul>
                    <p>Java language provides these securities by default. Some security can also be provided by an application developer explicitly through SSL, JAAS, Cryptography, etc.</p>
                </p>
                <hr />
                <h5>4) Platform Independent</h5>
                <p>
                    Java is platform independent
                    Java is platform independent because it is different from other languages like C
                    , C++
                    , etc. which are compiled into platform specific machines while Java is a write once, run anywhere language. A platform is the hardware or software environment in which a program runs.<br /><br />

                    There are two types of platforms software-based and hardware-based. Java provides a software-based platform.<br /><br />

                    The Java platform differs from most other platforms in the sense that it is a software-based platform that runs on top of other hardware-based platforms. It has two components:<br /><br />

                    <ul>
                        <li>Runtime Environment</li>
                        <li>API(Application Programming Interface)</li>
                    </ul>
                    <p>Java code can be executed on multiple platforms, for example, Windows, Linux, Sun Solaris, Mac/OS, etc. Java code is compiled by the compiler and converted into bytecode. This bytecode is a platform-independent code because it can be run on multiple platforms, i.e., Write Once and Run Anywhere (WORA).</p>
                </p>
                <hr />

                <h5>5) Robust</h5>
                <p>The English mining of Robust is strong. Java is robust because:

                    <ul>
                        <li>It uses strong memory management.</li>
                        <li>There is a lack of pointers that avoids security problems.</li>
                        <li>Java provides automatic garbage collection which runs on the Java Virtual Machine to get rid of objects which are not being used by a Java application anymore.</li>
                        <li>There are exception handling and the type checking mechanism in Java. All these points make Java robust.</li>
                    </ul>
                </p>
                <hr />

                <h5>6) Portable</h5>
                <p>Java is portable because it facilitates you to carry the Java bytecode to any platform. It doesn't require any implementation.</p>
                <hr />

                <h5>7) Architecture-neutral</h5>

                <p>
                    Java is architecture neutral because there are no implementation dependent features, for example, the size of primitive types is fixed.
                    <br /><br /><b>Example: </b>
                    In C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of memory for 64-bit architecture. However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java.

                </p>
                <hr />
                <h5>8) Dynamic</h5>

                <p>
                    Java is a dynamic language. It supports the dynamic loading of classes. It means classes are loaded on demand. It also supports functions from its native languages, i.e., C and C++.
                    <br /><br />
                    Java supports dynamic compilation and automatic memory management (garbage collection).
                </p>
                <hr />

                <h5>9) Interpreted</h5>
                <p>
                    The Java interpreter converts the Java bytecode (.class file) into the code understand by the operating system.<br /><br />
                    Java interpreter is a computer program (system software) that implements the JVM. It is responsible for reading and executing the program. It is designed in such a way that it can read the source program and translate the source code instruction by instruction. It converts the high-level program into assembly language (machine language).
                </p>
                <hr />

                <h5>10) High Performance</h5>
                <p>
                    Java is faster than other traditional interpreted programming languages because Java bytecode is "close" to native code. It is still a little bit slower than a compiled language (e.g., C++). Java is an interpreted language that is why it is slower than compiled languages, e.g., C, C++, etc.
                </p>
                <hr />

                <h5>11) Multi-Threading</h5>
                <p>
                    Multi-threaded
                    A thread is like a separate program, executing concurrently. We can write Java programs that deal with many tasks at once by defining multiple threads. The main advantage of multi-threading is that it doesn't occupy memory for each thread. It shares a common memory area. Threads are important for multi-media, Web applications, etc.
                </p>
                <hr />

                <h5>12) Distributed</h5>
                <p>
                Java is distributed because it facilitates users to create distributed applications in Java. RMI and EJB are used for creating distributed applications. This feature of Java makes us able to access files by calling the methods from any machine on the internet.
                </p>






                <br /><br /><br />
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
            </div>
        </>
    )
}

export default FeaturesOfJava;