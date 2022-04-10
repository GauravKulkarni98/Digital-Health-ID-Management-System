import React from 'react'
import { Link ,useHistory} from 'react-router-dom'
import pic from '../../images/ms-icon-310x310.png'

export default function Navbar(props) {

// let userName =  localStorage.getItem('name');
let userName =  sessionStorage.getItem('name');


function refreshPage() {
    window.location.reload(false);
  }
const history = useHistory();
   const logout = () => {
       if(window.confirm("Do you want to logout?") === true){
    //    localStorage.clear();
    sessionStorage.clear();
       history.push('/');
       refreshPage();
       }
   }
   const login = () => {
    sessionStorage.clear();
    history.push('/login');
    refreshPage();
   }



return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/">
                    <img src={pic} alt="" width="50" height="50" />
                    <h6>DigitalHealthId</h6>
                </Link>
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/"><h4>HOME</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  onClick={login} ><h4>LOGIN</h4></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link " to="/generate"><h4>Generate <br/>HEALTH ID</h4></Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><h4>CONTACT</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/about"><h4>ABOUT US</h4></Link>
                            </li>
                            {/* {localStorage.getItem('name') ? */}
                            {sessionStorage.getItem('name') ?
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <h4>{userName}</h4> 
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" onClick={logout} >Logout</a></li>
                                </ul>
                            </li>
                            : null}
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'rgb(36 74 104)' : 'white'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h5>Enable Dark Mode</h5></label>
                        </div>

                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
