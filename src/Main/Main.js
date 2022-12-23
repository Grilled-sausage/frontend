import './Main.css';
import mainLogo from "../Components/logo.svg";
import search from '../assets/search.svg';
import myPage from '../assets/myPage.svg';
import MainHeader from '../Components/MainHeader';
import MainContainer from '../Components/MainContainer';

function Main() {
  return (
    <>
      <MainContainer 
        genre={'전체'}
      />
      <MainContainer 
        genre={'액션'}
      />
      <MainContainer 
        // genre={}
      />
      <MainContainer 
        // genre={}
      />
      <MainContainer 
        // genre={}
      />
    </>
  );
}

export default Main;