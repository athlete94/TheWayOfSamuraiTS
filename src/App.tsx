import './App.module.css';
import { Header } from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import Friends from './components/Friends/Friends'
import s from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import React from "react";
import Dialogs from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";


const App = () => {
  return (
      <BrowserRouter>
          <div className={s.App}>
              <Header />
              <Navbar />
              <div className={s.app_wrapper_content}>
                  <Routes>
                      <Route path='/profile/*' element={<Profile />} />
                      <Route path='/dialogs/*' element={<Dialogs />}/>
                      <Route path='/friends/*' element={<Friends/>}/>
                      <Route path='/news/*' element={<News/>}/>
                          <Route path='/users/*' element={<Users/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
