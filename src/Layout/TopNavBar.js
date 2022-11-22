import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Assets/CSS/layout.css";
import home from "../Assets/Images/home.png";
import menuhome from "../Assets/Images/menu.jpg";

function TopNavBar(
    { setShowSidenavBar,
        showSideNavBar,
        headers
    }
) {

    const sideNavShow = () => {
        setShowSidenavBar(!showSideNavBar);
    }

    const location = useLocation();

    return (
        <>
            <div id="topnavbar">
                <div id="link">
                    <div id="smoothmenu" className="ddsmoothmenu">
                        <ul>

                            <li id="sidenavbutton" style={{ paddingLeft: "15px" }} onClick={sideNavShow}>
                                <NavLink>
                                    <img src={menuhome} alt="home" width={13} height={13}></img>
                                    Menu
                                </NavLink>
                            </li>
                            <li style={{ width: "90px" }}>
                                <NavLink to="/">
                                    <img src={home} alt="home" width={13} height={13}></img>
                                    HOME
                                </NavLink>
                            </li>
                            {headers.map((prop, key) => {
                                if (prop)
                                    return (
                                        <li
                                            key={key}
                                        >
                                            <NavLink
                                                to={prop.layout + prop.index}
                                                style={({ isActive }) => ({
                                                    color: isActive ? 'white' : 'white',
                                                    backgroundColor: isActive || location.pathname.startsWith(prop.layout) ? "green" : ""
                                                }
                                                )}
                                            >
                                                <p>{prop.name}</p>
                                            </NavLink>
                                        </li>

                                    );
                                return null;
                            })}
                        </ul>
                        <br style={{ "clear": "left" }}></br>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopNavBar;