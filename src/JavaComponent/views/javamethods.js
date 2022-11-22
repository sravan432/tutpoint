import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";

function MethodsJava(){
    return (
        <>
            <div>
            <h1>Java Methods</h1>
                <div>
                    <ul>
                        <li>A method is a block of code which only runs when it is called.</li>
                        <li>You can pass data, known as parameters, into a method.</li>
                        <li>Methods are used to perform certain actions, and they are also known as functions.</li>
                        <li>The method in Java is a collection of instructions that performs a specific task. It provides the reusability of code.</li>
                        <li>Why use methods? To reuse code: define the code once, and use it many times.</li>
                    </ul>
                </div>

                <h3>Method Declaration</h3>
                <p>The method declaration provides information about method attributes, such as visibility, return-type, name, and arguments. It has six components that are known as method header</p>

                <p><strong>Method Signature:</strong> Every method has a method signature. It is a part of the method declaration. It includes the <strong>method name</strong> and <strong>parameter list</strong>.</p>
                <p><strong>Access Specifier:</strong> Access specifier or modifier is the access type of the method. It specifies the visibility of the method. Java provides <strong>four</strong> types of access specifier:</p>
                <ul>
                    <li><strong>Public:</strong> The method is accessible by all classes when we use public specifier in our application.</li>
                    <li><strong>Private:</strong> When we use a private access specifier, the method is accessible only in the classes in which it is defined.</li>
                    <li><strong>Protected:</strong> When we use protected access specifier, the method is accessible within the same package or subclasses in a different package.</li>
                    <li><strong>Default:</strong> When we do not use any access specifier in the method declaration, Java uses default access specifier by default. It is visible only from the same package only.</li>
                </ul>
                <p><strong>Return Type:</strong> Return type is a data type that the method returns. It may have a primitive data type, object, collection, void, etc. If the method does not return anything, we use void keyword.</p>
                <p><strong>Method Name:</strong> It is a unique name that is used to define the name of a method. It must be corresponding to the functionality of the method. Suppose, if we are creating a method for subtraction of two numbers, the method name must be <strong>subtraction().</strong> A method is invoked by its name.</p>
                <p><strong>Parameter List:</strong> It is the list of parameters separated by a comma and enclosed in the pair of parentheses. It contains the data type and variable name. If the method has no parameter, left the parentheses blank.</p>
                <p><strong>Method Body:</strong> It is a part of the method declaration. It contains all the actions to be performed. It is enclosed within the pair of curly braces.</p>

                <h2 >Naming a Method</h2>
                <p>While defining a method, remember that the method name must be a <strong>verb</strong> and start with a <strong>lowercase</strong> letter. If the method name has more than two words, the first name must be a verb followed by adjective or noun. In the multi-word method name, the first letter of each word must be in <strong>uppercase</strong> except the first word. For example:</p>
                <p><strong>Single-word method name:</strong> sum(), area()</p>
                <p><strong>Multi-word method name:</strong> areaOfCircle(), stringComparision()</p>
                <p>It is also possible that a method has the same name as another method name in the same class, it is known as <strong>method overloading</strong>.</p>
                <h2>Types of Method</h2>
                <p>There are two types of methods in Java:</p>
                <ul>
                    <li>Predefined Method</li>
                    <li>User-defined Method</li>
                </ul>
                <h3 >Predefined Method</h3>
                <p>In Java, predefined methods are the method that is already defined in the Java class libraries is known as predefined methods. It is also known as the <strong>standard library method</strong> or <strong>built-in method</strong>. We can directly use these methods just by calling them in the program at any point. Some pre-defined methods are <strong>length(), equals(), compareTo(), sqrt(),</strong> etc. When we call any of the predefined methods in our program, a series of codes related to the corresponding method runs in the background that is already stored in the library.</p>

                <p>Each and every predefined method is defined inside a class. Such as <strong>print()</strong> method is defined in the <strong>java.io.PrintStream</strong> class. It prints the statement that we write inside the method. For example, <strong>print("Java")</strong>, it prints Java on the console.</p>
                <h3 class="h3">User-defined Method</h3>
                <p>The method written by the user or programmer is known as <strong>a user-defined</strong> method. These methods are modified according to the requirement.</p>
                <h3 >How to Create a User-defined Method</h3>
            </div>
        </>
    )
}

export default MethodsJava;