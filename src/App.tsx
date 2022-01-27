import './App.module.css';
import { Header } from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import Friends from './components/Friends/Friends'
import s from './App.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import React from "react";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
}


const App: React.FC<AppPropsType> = ({state}) => {
  return (
      <BrowserRouter>
          <div className={s.App}>
              <Header />
              <Navbar />
              <div className={s.app_wrapper_content}>
                  <Routes>
                      <Route path='/profile/*' element={<Profile postData={state.postData}/>} />
                      <Route path='/dialogs/*' element={<Dialogs dialogsData={state.dialogsData} messageData={state.messageData} />}/>
                      <Route path='/friends/*' element={<Friends/>}/>
                      <Route path='/news/*' element={<News/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
