import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
 return <div className="header">
    <div className="header-section logo">LOGO</div>
    <div className="header-section search-bar"><input type="text" placeholder="Search"></input> </div>
    <div className="header-section user-icon">User icon</div>
  </div>
}
   

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);
