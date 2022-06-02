import './App.module.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import Friends from './components/Friends/Friends'
import s from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import React, {useEffect} from "react";
import Dialogs from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AuthInitialStateType, setIsAuthTC} from "./redux/authReducer";
import {AppStateType} from "./redux/store";
import {CircularProgress} from "@mui/material";




const App = () => {
    let isAuth = useSelector<AppStateType, boolean>(state => state.AuthReducer.isAuth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsAuthTC())
    }, [])


    if (!isAuth) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }else{
        return (
            <BrowserRouter>
                <div className={s.App}>
                    <Header/>
                    <Navbar/>
                    <div className={s.app_wrapper_content}>
                        <Routes>
                            <Route path='/profile/:userId' element={<Profile/>}/>
                            <Route path='/dialogs/*' element={<Dialogs/>}/>
                            <Route path='/friends/*' element={<Friends/>}/>
                            <Route path='/news/*' element={<News/>}/>
                            <Route path='/users/*' element={<Users/>}/>
                            <Route path='/login/*' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
