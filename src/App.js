import React from 'react'
import './App.css';
import TitleMessage from './components/title-message/title-message.component'

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";

const App = () => {
  //두번째 테스트다테스트한다
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
    </div>
  );
}

export default App;
