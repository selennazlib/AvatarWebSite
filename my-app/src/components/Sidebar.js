import React from "react";

function Sidebar(props) {
    const asideStyle = {
        width: "calc(30% - 10px)",
        marginLeft: "10px"    
    }
  return (
    <aside style={asideStyle} className="sidebar-component">
        <p>Meet with {props.name}</p>
    </aside>
  );
  
}

export default Sidebar;
