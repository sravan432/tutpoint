import React from "react";
import HistoryOfJava from "../views/Historyofjava";
import FeaturesOfJava from "../views/Featuresofjava";
import WhatIsJava from "../views/Whatisjava";
import HelloJavaProgram from "../views/Hellojavaprogram";
import JavaJdkJvm from "../views/Jdkjrejvm";
import JavaJvm from "../views/Javajvm";
import JavaVariables from "../views/Javavariables";
import JavaDatatypes from "../views/Javadatatypes";
import JavaOperators from "../views/Javaoperators";
import JavaKeywords from "../views/Javakeywords";
import JavaIfElse from "../views/Javaifelse";
import JavaSwitch from "../views/Javaswitch";
import JavaForLoop from "../views/Javaforloop";
import JavaWhileloop from "../views/Javawhileloop";
import JavaDoWhile from "../views/Javadowhileloop";
import JavaBreak from "../views/Javabreak";
import JavaContinue from "../views/Javacontinue";
import JavaComments from "../views/JavaComments";
import JavaPrograms from "../views/JavaPrograms";
import JavaTypeCasting from "../views/JavaTypeCasting";
import ControlStmts from "../views/controlstmts";
import MethodsJava from "../views/javamethods";
import JavaScopes from "../views/javascopes";
import Recursion from "../views/javarecursion";
import TypesOfJava from "../views/TypesOfjava";

const dashboardRoutes = [
    {
      name : "Java Tutorial",
      layout: ""
    },
    {
      path: "/whatisjava",
      name: "What Is java",
      component: WhatIsJava,
      layout: "/java"
    },
    {
      path: "/historyofjava",
      name: "History Of Java",
      component: HistoryOfJava,
      layout: "/java"
    },
    {
      path: "/featuresofjava",
      name: "Features Of Java",
      component: FeaturesOfJava,
      layout: "/java"
    },
    {
      path: "/hellojavaprogram",
      name: "Hello java Program",
      component: HelloJavaProgram,
      layout: "/java"
    },
    {
      path: "/jdkjrejvm",
      name: "JDk, JRE and JVM",
      component: JavaJdkJvm,
      layout: "/java"
    },
    {
      path: "/jvm",
      name: "JVM:",
      component: JavaJvm,
      layout: "/java"
    },
    {
      path: "/variables",
      name: "Java Variables:",
      component: JavaVariables,
      layout: "/java"
    },
    {
      path: "/datatypes",
      name: "Java Data Types:",
      component: JavaDatatypes,
      layout: "/java"
    },
    {
      path: "/typecasting",
      name: "Java Type Casting:",
      component: JavaTypeCasting,
      layout: "/java"
    },
    {
      path: "/operators",
      name: "Java Operators:",
      component: JavaOperators,
      layout: "/java"
    },
    {
      path: "/keywords",
      name: "Java Keywords:",
      component: JavaKeywords,
      layout: "/java"
    },
    {
      path: "/control-statements",
      name: "Control Statements:",
      component: ControlStmts,
      layout: "/java"
    },
    {
      path: "/ifelse",
      name: "Java If-Else:",
      component: JavaIfElse,
      layout: "/java"
    },
    {
      path: "/switch",
      name: "Java Switch:",
      component: JavaSwitch,
      layout: "/java"
    },
    {
      path: "/forloop",
      name: "Java For Loop:",
      component: JavaForLoop,
      layout: "/java"
    },
    {
      path: "/whileloop",
      name: "Java While Loop:",
      component: JavaWhileloop,
      layout: "/java"
    },
    {
      path: "/dowhileloop",
      name: "Java Do While Loop:",
      component: JavaDoWhile,
      layout: "/java"
    },
    {
      path: "/break",
      name: "Java Break:",
      component: JavaBreak,
      layout: "/java"
    },
    {
      path: "/continue",
      name: "Java Continue:",
      component: JavaContinue,
      layout: "/java"
    },
    {
      path: "/comments",
      name: "Java Comments:",
      component: JavaComments,
      layout: "/java"
    },
    {
      path: "/javaprograms",
      name: "Java Programs:",
      component: JavaPrograms,
      layout: "/java"
    },
    {
      path: "/java-methods",
      name: "Java Methods:",
      component: MethodsJava,
      layout: "/java"
    },,
    {
      path: "/java-methods-types",
      name: "Java Methods Types:",
      component: TypesOfJava,
      layout: "/java"
    },
    {
      path: "/java-methods-scopes",
      name: "Java Scopes:",
      component: JavaScopes,
      layout: "/java"
    },
    {
      path: "/java-recursion",
      name: "Java Recursion:",
      component: Recursion,
      layout: "/java"
    }
  ];
  
  export default dashboardRoutes;