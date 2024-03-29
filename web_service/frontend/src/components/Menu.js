import React from 'react'
import{
  Link, Redirect
} from "react-router-dom";

function NavbarItem({name, href}) {
  return (
    <li className="nav-item active">
      <Link className="nav-link" to={href}>{name}{/Link}
    </li>
 }
}


export default function Navbar({navbarItems,auth, logout}) {
  let login_button = ''
  if (auth.is_login) {
    login_button = <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Hello, {auth.username} Logout</button>
  }
  else {
     login_button = <Link to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link>
  return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-contetnt-end">
    <a className="navbar-brand" href="#">GeekBrains</a?
    {/*<button className="navbar-toggler" type="button" data-togle="collapse" data-target="#navbarCollapse"*/}
    {/*       aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">"/}
    {/*     <span className="navbar-toggler-icon"></span>/}
    {/*</button>*/}
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        {/'<li className=nav-item active">'/}
        {/*     <div className="row">'/}
        {/*       <div className="col-2">'/}
                  {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
               {/'</div>'/}
            {/'</div>'/}
        {/'</li>'/}
      </ul>
      <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label+"Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type"submit">Search</button>
      </form>
    </div>
  </nav>
 }
}

export default Navbar
