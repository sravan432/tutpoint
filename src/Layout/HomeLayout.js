import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Highlighter from "react-highlight-words";
import Advertisements from "./Advertisements";
import Footer from "./Footer";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

function HomeLayout({ routes, headers }) {
    const location = useLocation();
    const mainPanel = React.useRef(null);
    const [showSideNavBar, setShowSidenavBar] = useState(true);
    const [count, setCount] = useState(0);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout !== "") {
                return (
                    <Route
                        path={prop.path}
                        element={<prop.component />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        

        window.addEventListener('resize', handleWindowResize);

        if (windowSize.innerWidth < 976 && count === 0) {
            setShowSidenavBar(false);
            setCount(1);
        }
        else if (windowSize.innerWidth > 976 && count === 1) {
            setShowSidenavBar(true);
            setCount(0);
        }

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [location, windowSize.innerWidth, count]);
    return (
        <>
            <div style={{ widht: "100%" }}>
                <TopNavBar
                    setShowSidenavBar={setShowSidenavBar}
                    showSideNavBar={showSideNavBar}
                    headers={headers}
                />
                <div className="divlay">
                    <div
                        id="sidenav"
                        style={{ display: showSideNavBar ? "block" : "none" }}>
                        <SideNavBar
                            setShowSidenavBar={setShowSidenavBar}
                            showSideNavBar={showSideNavBar}
                            windowSize={windowSize}
                            routes={routes}
                        />
                    </div>
                    <div
                        id="viewdiv">
                        <div
                            id="contentshow"
                            ref={mainPanel}>
                            <Routes>{getRoutes(routes)}</Routes>
                            <div>
                                <Footer></Footer>
                            </div>
                        </div>

                    </div>
                    <div
                        id="advertise">
                        <Advertisements />
                    </div>

                </div>

            </div>
        </>
    );
}


function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default HomeLayout;