import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/CSS/layout.css";

function SideNavBar({ routes, showSideNavBar, setShowSidenavBar, windowSize }) {
    return (
        <div className="sidebar">
            <div >
                {routes.map((prop, key) => {
                    if (prop.layout !== "")
                        return (
                            <li
                                title={prop.name}
                                style={{ listStyleType: "none" }}
                                key={key}
                            >
                                <NavLink
                                    onClick={() => { windowSize.innerWidth < 976 ? setShowSidenavBar(false) : setShowSidenavBar(true) }}
                                    to={prop.layout + prop.path}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ea2744' : 'black',
                                        textDecoration: isActive ? "underline" : "none"
                                    }
                                    )}
                                >
                                    <p style={{ width: "320px" }}>{prop.name}</p>
                                </NavLink>
                                <br />
                            </li>

                        );
                    else if (prop.layout === "") {
                        return (
                            <li
                                style={{ listStyleType: "none", paddingLeft: "10px", color: "brown", paddingBottom: "10px" }}
                                key={key}
                            >
                                <p>{prop.name}</p>
                            </li>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default SideNavBar;