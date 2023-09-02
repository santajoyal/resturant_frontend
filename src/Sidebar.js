import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Admin Portal</div>
</a>


<hr className="sidebar-divider my-0"/>


<li className="nav-item active">
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>


<hr className="sidebar-divider"/>

<div className="sidebar-heading">
    Interface
</div>

<li className="nav-item">
    <Link to={"/portal/list-restaurants"} className="nav-link collapsed" 
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Restaurants</span>
    </Link>
    </li>
</ul>
    
  )
}

export default Sidebar;