import './App.module.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import s from './App.module.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {setIsAuthTC} from "./redux/authReducer";
import {CircularProgress} from "@mui/material";
import CustomizedSnackbars from "./components/Errors/Snackbar";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {Preloader} from "./components/Preloader/circle/Preloader";
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const NotFound = React.lazy(() => import('./components/404/NotFound'));
const Users = React.lazy(() => import('./components/Users/Users'))
const Login = React.lazy(() => import('./components/Login/Login'))
const News = React.lazy(() => import('./components/News/News'))
const Friends = React.lazy(() => import('./components/Friends/Friends'))


const App = () => {
    let isAuth = useAppSelector(state => state.AuthReducer.isAuth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setIsAuthTC())
    }, [])


    if (!isAuth) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>

    }
        return (
            <HashRouter>
                <div className={s.App}>
                    <Header/>
                    <Navbar/>
                    <div className={s.app_wrapper_content}>
                        <React.Suspense fallback={<div><Preloader /></div>}>
                            <Routes>
                                <Route path='/' element={<Profile/>}/>
                                <Route path='/:userId' element={<Profile/>}/>
                                <Route path='/dialogs/*' element={<Dialogs/>}/>
                                <Route path='/friends/*' element={<Friends/>}/>
                                <Route path='/news/*' element={<News/>}/>
                                <Route path='/users/*' element={<Users/>}/>
                                <Route path='/login/*' element={<Login/>}/>
                                <Route path='/*' element={<NotFound/>}/>
                            </Routes>
                        </React.Suspense>
                        <CustomizedSnackbars />
                    </div>
                </div>
            </HashRouter>
        );
}

export default App;
