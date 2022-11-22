import React from "react";
import "../../../Assets/CSS/pages.css";
import { NavLink } from "react-router-dom";

function WpfButtonControl() {
    return (
        <>
            <div>


                <h1>Button Control</h1>
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
                    Every GUI is incomplete without the use of the Button. <br />
                    WPF is very flexible and allows us to do all the things. Just like other WPF control, we can add Button by adding the button tag to our window. <br />
                    Button class shows the basic type of button control.
                </p>
                <p><b>Namespace used:</b> System.Windows.Controls</p>

                <p>
                    <h3>Attributes</h3>
                    <table>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>x:Name</td>
                            <td>
                                <p>unique identifier of the control. <br />
                                    Examples : x:Name="submitButton"
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <p>Returns the object name. <br />
                                    Examples : Name="submitButton"
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Width</td>
                            <td>
                                <p>
                                    Adjust the width of the control <br />
                                    Examples : Width="200", Width="500"
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>
                                <p>
                                    Adjust the height of the control
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <p>
                                    Display the text on the control
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Background</td>
                            <td>
                                <p>
                                    Add Background color to the control
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Foreground</td>
                            <td>
                                <p>
                                    Add color to the content in the control
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Margin</td>
                            <td>
                                <p>
                                    add margins to the control
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>HorizontalAlignment</td>
                            <td>
                                <p>
                                    Used to adjust the alignment horizontally
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>VerticalAlignment</td>
                            <td>
                                <p>
                                    Used to adjust the alignment vertically
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>FontWeight</td>
                            <td>
                                <p>
                                    Used to increase or decrease the weight  of the text
                                </p>
                            </td>
                        </tr>
                    </table>
                </p>

                <p>
                    <h3>Methods</h3>
                    <table>
                        <tr>
                            <th>Method</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Click</td>
                            <td>
                                <p>
                                    Add method when click on button
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>ClickButton</td>
                            <td>
                                <p>
                                    Simulates a mouse click on the object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>ClickM</td>
                            <td>
                                <p>
                                    Simulates a click of the middle mouse button over the object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>ClickR</td>
                            <td>
                                <p>
                                    Simulates a click of the right mouse button over the object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>DblClick</td>
                            <td>
                                <p>
                                    Simulates a double-click of the left mouse button over the object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>DblClickM</td>
                            <td>
                                <p>
                                    Simulates a double-click of the middle mouse button over the object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>DblClickR</td>
                            <td>
                                <p>
                                    Simulates a double-click of the right mouse button over the object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Drag</td>
                            <td>
                                <p>
                                    Simulates a dragging event performed with the left mouse button.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>DragM</td>
                            <td>
                                <p>
                                    Simulates a dragging event performed with the middle mouse button.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>DragR</td>
                            <td>
                                <p>
                                    Simulates a dragging event performed with the right mouse button.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>HoverMouse</td>
                            <td>
                                <p>
                                    Simulates moving the mouse pointer to the specified position within an object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Keys</td>
                            <td>
                                <p>
                                    Sends a keystroke to an object.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>MouseWheel</td>
                            <td>
                                <p>
                                    Simulates rotation of the mouse wheel over an object.
                                </p>
                            </td>
                        </tr>

                    </table>
                </p>

                <p>Examples</p>

                <h5>1) Event Handling On Button</h5>

                <h5>2) Button with the Images</h5>

                <h5>3) Button with Formatted Content</h5>
















            </div>
        </>
    )
}

export default WpfButtonControl;