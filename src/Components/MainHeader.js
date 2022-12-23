import './MainHeader.css';
import mainLogo from "../Components/logo.svg";
import search from '../assets/search.svg';
import myPage from '../assets/myPage.svg';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <>
      <div className='navbar-container'>
        <nav className="navbar">
          <div className="navbar-helper">
          </div>

          <div className="main-navbar-logo">
            <Link to="/main">
              <img src={mainLogo} alt="logo" />
            </Link>
          </div>

          <ul className="navbar-menu">
            <li className="hidden"><input /></li>
            <li><img id='search-icon' src={search} alt="search" /></li>
            <li><img id='mypage-icon' src={myPage} alt="myPage" /></li>
          </ul>
        </nav>
      </div>
      <div >

      </div>
    </>
  );
}

export default MainHeader;