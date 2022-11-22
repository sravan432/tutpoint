import React from "react";
import WhatIsWpf from "../views/WhatIsWpf";
import WpfButtonControl from "../views/WpfButtonControl";
import WpfCheckBox from "../views/WpfCheckboxControl";
import WpfComboBox from "../views/WpfComboBox";
import WpfImage from "../views/WpfImage";
import WpfInCShap from "../views/WpfInCSharp";
import WpfProgressbar from "../views/WpfProgressBar";
import WpfRadioButton from "../views/WpfRadioButton";
import WpfTextBlock from "../views/WpfTextBlock";
import WpfTextBox from "../views/WpfTextBox";
import WpfToggleButton from "../views/WpfToggleButton";
import WpfToolTip from "../views/WpfToolTip";

const dashboardRoutes = [
  {
    name: "WPF Tutorial",
    layout: ""
  },
  {
    path: "/what-is-wpf",
    name: "What Is WPF",
    component: WhatIsWpf,
    layout: "/wpf"
  },
  {
    path: "/wpf-in-csharp",
    name: "WPF in c#",
    component: WpfInCShap,
    layout: "/wpf"
  },
  {
    name: "WPF Controls",
    layout: ""
  },
  {
    path: "/wpf-button-control",
    name: "Button Control",
    component: WpfButtonControl,
    layout: "/wpf"
  },
  {
    path: "/wpf-textbox-control",
    name: "TextBox Control",
    component: WpfTextBox,
    layout: "/wpf"
  },
  {
    path: "/wpf-textblock-control",
    name: "TextBlock Control",
    component: WpfTextBlock,
    layout: "/wpf"
  },
  {
    path: "/wpf-checkbox-control",
    name: "CheckBox Control",
    component: WpfCheckBox,
    layout: "/wpf"
  },
  {
    path: "/wpf-combobox-control",
    name: "ComboBox Control",
    component: WpfComboBox,
    layout: "/wpf"
  },
  {
    path: "/wpf-radiobutton-control",
    name: "RadioButton Control",
    component: WpfRadioButton,
    layout: "/wpf"
  },
  {
    path: "/wpf-togglebutton-control",
    name: "ToggleButton Control",
    component: WpfToggleButton,
    layout: "/wpf"
  },
  {
    path: "/wpf-image-control",
    name: "Image Control",
    component: WpfImage,
    layout: "/wpf"
  },
  {
    path: "/wpf-progressbar-control",
    name: "ProgressBar Control",
    component: WpfProgressbar,
    layout: "/wpf"
  },
  {
    path: "/wpf-tooltip-control",
    name: "ToolTip Control",
    component: WpfToolTip,
    layout: "/wpf"
  }
]

export default dashboardRoutes;