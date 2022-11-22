import React from "react";
import FeaturesOfJava from "../../JavaComponent/views/Featuresofjava";
import HelloJavaProgram from "../../JavaComponent/views/Hellojavaprogram";
import HistoryOfJava from "../../JavaComponent/views/Historyofjava";
import JavaJdkJvm from "../../JavaComponent/views/Jdkjrejvm";
import WhatIsJava from "../../JavaComponent/views/Whatisjava";

const dashboardRoutes = [
    {
      path: "/whatisjava",
      name: "What Is java",
      component: WhatIsJava,
      layout: "/python"
    },
    {
      path: "/historyofjava",
      name: "History Of Java",
      component: HistoryOfJava,
      layout: "/python"
    },
    {
      path: "/featuresofjava",
      name: "Features Of Java",
      component: FeaturesOfJava,
      layout: "/python"
    },
    {
      path: "/hellojavaprogram",
      name: "Hello java Program",
      component: HelloJavaProgram,
      layout: "/python"
    },
    {
      path: "/jdkjrejvm",
      name: "JDk, JRE and JVM",
      component: JavaJdkJvm,
      layout: "/python"
    }
  ];
  
  export default dashboardRoutes;