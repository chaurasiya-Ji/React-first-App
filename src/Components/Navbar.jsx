import React from "react";
import './Navbar.css';

import  {NavLink} from 'react-router-dom';
const Navbar = ()=>{
    return(
    <>
    {/* <div className="navbar">
    <NavLink to = "/home">Home</NavLink>
    <NavLink to = "/about">About</NavLink>
    </div> */}
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark nav">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Code</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink to = "/home" className="nav-link active" aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to = "/about" className="nav-link" >About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to = "/contect" className="nav-link" >Contect</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    
    </>
    )
}

export default Navbar;
