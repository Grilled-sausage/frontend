import './MainHeader.css';
import mainLogo from "../Components/logo.svg";
import search from '../assets/search.svg';
import myPage from '../assets/myPage.svg';
import { Link } from 'react-router-dom';

// 메인페이지, 더보기페이지, 작품정보페이지, 마이페이지 공통헤더
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
            <li>
              <Link to="/mypage">
                <img id='mypage-icon' src={myPage} alt="myPage" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainHeader;