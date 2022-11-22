import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/pages.css";
import datatypes from "../../Assets/Images/datatypes.png";

function JavaDatatypes() {
    return (
        <>
            <div>
                <h1>Data Types in Java</h1>
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
                    Data types specify the different sizes and values that can be stored in the variable.

                </p>
                <p>There are two types of data types in Java:
                    <ol>
                        <li>
                            <b>Primitive data types:</b><br />
                            <p>Examples : boolean, char, byte, short, int, long, float and double</p>

                        </li>
                        <li>
                            <b>Non-primitive data types:</b>
                            <p>Examples : Classes, Interfaces, Arrays, Strings</p>
                        </li>
                    </ol>

                </p>
                <div style={{ textAlign: "center" }}>
                    <img src={datatypes} alt="memory allocation"></img>
                </div>
                <hr />

                <h2>Primitive Data Types</h2>
                <p>
                    A primitive data type specifies the size and type of variable values, and it has no additional methods.
                </p>
                <p>There are 8 primitive data types in Java:</p>
                <br />

                <table>
                    <tr>
                        <th>Data Type</th>
                        <th>Size</th>
                        <th>Default Size</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>byte</td>
                        <td>1 byte</td>
                        <td>0</td>
                        <td>Stores whole numbers from -128 to 127</td>
                    </tr>
                    <tr>
                        <td>short</td>
                        <td>2 bytes</td>
                        <td>0</td>
                        <td>Stores whole numbers from -32,768 to 32,767</td>
                    </tr>
                    <tr>
                        <td>int</td>
                        <td>4 bytes</td>
                        <td>0</td>
                        <td>Stores whole numbers from -2,147,483,648 to 2,147,483,647</td>
                    </tr>
                    <tr>
                        <td>long</td>
                        <td>8 bytes</td>
                        <td>0L</td>
                        <td>Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
                    </tr>
                    <tr>
                        <td>float</td>
                        <td>4 bytes</td>
                        <td>0.0f</td>
                        <td>Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits</td>
                    </tr>
                    <tr>
                        <td>double</td>
                        <td>8 bytes</td>
                        <td>0.0d</td>
                        <td>Stores fractional numbers. Sufficient for storing 15 decimal digits</td>
                    </tr>
                    <tr>
                        <td>boolean</td>
                        <td>1 bit</td>
                        <td>false</td>
                        <td>Stores true or false values</td>
                    </tr>
                    <tr>
                        <td>char</td>
                        <td>2 bytes</td>
                        <td>'\u0000'</td>
                        <td>Stores a single character/letter or ASCII values</td>
                    </tr>

                </table>

                <h5>1) Byte Data Type</h5>
                <p>The byte data type is an example of primitive data type. It isan 8-bit signed two's complement integer. Its value-range lies between -128 to 127 (inclusive). Its minimum value is -128 and maximum value is 127. <br /><br />
                    Its default value is 0.<br /><br />
                    <b>When to use: </b>The byte data type is used to save memory in large arrays where the memory savings is most required. It saves space because a byte is 4 times smaller than an integer. It can also be used in place of "int" data type.
                </p>

                <h5>2) Short Data Type</h5>
                <p>
                    The short data type is a 16-bit signed two's complement integer. Its value-range lies between -32,768 to 32,767 (inclusive). Its minimum value is -32,768 and maximum value is 32,767.
                    <br /><br />
                    Its default value is 0.
                    <br /><br />
                    <b>When to use: </b>The short data type can also be used to save memory just like byte data type. A short data type is 2 times smaller than an integer.
                </p>

                <h5>3) Int Data Type</h5>
                <p>
                    The int data type is a 32-bit signed two's complement integer. Its value-range lies between - 2,147,483,648 (-2^31) to 2,147,483,647 (2^31 -1) (inclusive). Its minimum value is - 2,147,483,648and maximum value is 2,147,483,647.
                    <br /><br />
                    Its default value is 0.
                    <br /><br />
                    <b>When to use: </b>The int data type is generally used as a default data type for integral values unless if there is no problem about memory.
                </p>
                <h5>4) Long Data Type</h5>
                <p>
                    The long data type is a 64-bit two's complement integer. Its value-range lies between -9,223,372,036,854,775,808(-2^63) to 9,223,372,036,854,775,807(2^63 -1)(inclusive). Its minimum value is - 9,223,372,036,854,775,808and maximum value is 9,223,372,036,854,775,807.
                    <br /><br />
                    Its default value is 0.
                    <br /><br />
                    <b>When to use: </b>The long data type is used when you need a range of values more than those provided by int.
                </p>
                <h5>5) Float Data Type</h5>
                <p>
                    The float data type is a single-precision 32-bit IEEE 754 floating point.Its value range is unlimited. It is recommended to use a float (instead of double) if you need to save memory in large arrays of floating point numbers. The float data type should never be used for precise values, such as currency.
                    <br /><br />
                    Its default value is 0.0F.
                </p>
                <h5>6) Double Data Type</h5>
                <p>
                    The double data type is a double-precision 64-bit IEEE 754 floating point. Its value range is unlimited. The double data type is generally used for decimal values just like float. The double data type also should never be used for precise values, such as currency.
                    <br /><br />
                    Its default value is 0.0d.
                </p>

                <h5>8) Boolean Data Type</h5>
                <p>
                    The Boolean data type is used to store only two possible values: true and false. This data type is used for simple flags that track true/false conditions.

                    The Boolean data type specifies one bit of information, but its "size" can't be defined precisely.
                    <br /><br />
                    Its default value is false.
                </p>

                <h5>9) Char Data Type</h5>
                <p>
                    The char data type is a single 16-bit Unicode character. Its value-range lies between '\u0000' (or 0) to '\uffff' (or 65,535 inclusive).The char data type is used to store characters.
                    <br /><br />
                    Its default value is '\u0000'
                </p>

            </div>
        </>
    )
}

export default JavaDatatypes;