import { Link, Outlet } from "react-router-dom";
import '../styles/navbarstyle.css';
import avtar from '../data/avtar.png'

function Navbar() {
  return (
    <>
      <div className="header-area">
        <div className="navbar">
          <div className="logo-container">
            <div className="logo-img-cont">
            <img src={avtar}alt="DILBAGH SINGH Logo" className="logo-img" />
            </div>
          
            <span className="logo"><a href="#top">Dilbagh singh</a></span>
          </div>
          
          <div className="nav">
            <Link to="/" className="li">
              <h4 className="nav-head">HOME</h4>
            </Link>

            <Link to="/about" className="li">
              <h4 className="nav-head">ABOUT</h4>
            </Link>

            <Link to="/project" className="li">
              <h4 className="nav-head">Project</h4>
            </Link>

            <Link to="/contact" className="li">
              <h4 className="nav-head">Contact</h4>
            </Link>
          </div>
          <div className="social-media">
            <a className="github" href="https://github.com/Dillu2432" target="_blank" rel="noopener noreferrer" aria-label="Go to github Profile">
              <img className="social-btn" src="https://cdn-icons-png.flaticon.com/128/12868/12868746.png" alt="github Icon"></img>
            </a>

        <a className="linkdin" href="https://linkedin.com/in/dilbagh-singh-a80426105/" target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn Profile">
          <img className="social-btn" src="https://cdn-icons-png.flaticon.com/128/2626/2626273.png" alt="linkdin Icon"></img>
        </a>
        <a className="instagram" href="https://www.instagram.com/dilbagh_mehta/" target="_blank" rel="noopener noreferrer" aria-label="Go to instagram Profile">
          <img className="social-btn" src="https://cdn-icons-png.flaticon.com/128/1057/1057248.png" alt="Instagram Icon"></img>
        </a>
      </div>
      </div>
      
      </div>
      
      <Outlet />
    </>
  );
}

export default Navbar;
