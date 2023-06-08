import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./SidebarOption.css";

function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption