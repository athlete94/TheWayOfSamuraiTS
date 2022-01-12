import './App.module.css';
import { Header } from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import s from './App.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className={s.App}>
              <Header />
              <Navbar />
              <div className={s.app_wrapper_content}>
                  <Routes>
                      <Route path='/profile' element={<Profile/>} />
                      <Route path='/dialogs' element={<Dialogs/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
