import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";


function TypesOfJava() {
    return (
        <>
            <div>
                <h1>Static Method</h1>

                <p>A method that has static keyword is known as static method. In other words, a method that belongs to a class rather than an instance of a class is known as a static method. We can also create a static method by using the keyword <strong>static</strong> before the method name.</p>
                <p>The main advantage of a static method is that we can call it without creating an object. It can access static data members and also change the value of it. It is used to create an instance method. It is invoked by using the class name. The best example of a static method is the <strong>main()</strong> method.</p>


                <h1>Instance Method</h1>
                <p>The method of the class is known as an <strong>instance method</strong>. It is a <strong>non-static</strong> method defined in the class. Before calling or invoking the instance method, it is necessary to create an object of its class. Let's see an example of an instance method.</p>
                <p>There are two types of instance method:</p>
                <ul>
                    <li><strong>Accessor Method</strong></li>
                    <li><strong>Mutator Method</strong></li>
                </ul>


                <p><strong>Accessor Method:</strong> The method(s) that reads the instance variable(s) is known as the accessor method. We can easily identify it because the method is prefixed with the word <strong>get</strong>. It is also known as <strong>getters</strong>. It returns the value of the private field. It is used to get the value of the private field.</p>

                <p><strong>Example</strong></p>

                <p><strong>Mutator Method:</strong> The method(s) read the instance variable(s) and also modify the values. We can easily identify it because the method is prefixed with the word <strong>set</strong>. It is also known as <strong>setters</strong> or <strong>modifiers</strong>. It does not return anything. It accepts a parameter of the same data type that depends on the field. It is used to set the value of the private field.</p>



                <h1>Abstract Method</h1>
                <p>The method that does not has method body is known as abstract method. In other words, without an implementation is known as abstract method. It always declares in the <strong>abstract class</strong>. It means the class itself must be abstract if it has abstract method. To create an abstract method, we use the keyword <strong>abstract</strong>.</p>

                <h1>Factory method</h1>
                <p>It is a method that returns an object to the class to which it belongs. All static methods are factory methods. For example, <strong>NumberFormat obj = NumberFormat.getNumberInstance();</strong></p>

            </div>
        </>
    )
}

export default TypesOfJava;