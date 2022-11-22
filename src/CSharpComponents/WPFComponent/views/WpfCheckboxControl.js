import React from "react";
import "../../../Assets/CSS/pages.css";
import { NavLink } from "react-router-dom";


function WpfCheckBox() {
    return (
        <>
            <div>

                <h1>WPF CheckBox Control</h1>
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
                        <li>From the CheckBox Control we can select or unselect the item.</li>
                        <li>CheckBox provides a list from where the user can select(check) the item. And we will use this list in most of the application.</li>
                        <li>CheckBox control allows the user to toggle the option on or off.</li>
                        <li>CheckBox shows us the value in the form of the Boolean value.</li>
                    </ul>
                </p>

                <p>
                    <h3>Attributes</h3>
                    <table>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>IsChecked</td>
                            <td>
                                <p>Used to Check or uncheck the checkbox<br />
                                    Examples : IsChecked="True"
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Checked</td>
                            <td>
                                <p>Function when checkbox checked<br />
                                    Examples : Checked="checkBox_Checked"
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Unchecked</td>
                            <td>
                                <p>Function When Checkbox is unchecked<br />
                                    Examples : Unchecked="checkBox_Unchecked"
                                </p>
                            </td>
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

            </div>
        </>
    )
}

export default WpfCheckBox;