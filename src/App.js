import React from 'react';
import './App.css';
import './mixins/padding.css'
import Header from './components/header/header';
import SideBar from './components/navbar/side-bar';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/profile/profile';
import Setting from './components/setting/setting';
import News from './components/news/news';
import Music from './components/music/music';


function App() {
  return (
    <BrowserRouter>
      <div className="App-wrapper ">
        <div className='container'>
          <Header/>
          <SideBar/>
          <main className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs' Component={Dialogs}/>
              <Route path='/profile' Component={Profile}/>
              <Route path='/music' Component={Music}/>
              <Route path='/settiung' Component={Setting}/>
              <Route path='/news' Component={News}/>
            </Routes>
          </main>
        </div>
      </div> 
    </BrowserRouter>

  );
}

export default App;
