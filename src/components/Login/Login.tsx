import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC, setIsAuthTC} from "../../redux/authReducer";
import s from './Login..module.css'
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import {setError} from "../../redux/appReducer";

export const Login = () => {

    let isLogin = useSelector<AppStateType, boolean>(state => state.AuthReducer.isLogin)
    let error = useSelector<AppStateType, string>(state => state.AppReducer.error)
    const dispatch = useDispatch()

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },

    })


    if (isLogin) {
        return <Navigate to={`/profile/18495`}/>
    }

    return (
        <div className={s.login_form}>
            <form onSubmit={formik.handleSubmit} onChange={() => dispatch(setError(''))}>
                <div className={s.login_input}>
                    <input
                        type="text"
                        placeholder='email'
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={s.login_input}>
                    <input type="password"
                           placeholder='password'
                           {...formik.getFieldProps('password')}
                    />
                </div>
                <div className={s.checkbox}><label>
                    <input type="checkbox"
                           {...formik.getFieldProps('rememberMe')}
                           checked={formik.values.rememberMe}
                    />
                    <span>remember me</span>
                </label></div>
                <div className={s.loginBtn}>
                    <button type={'submit'}>LOGIN</button>
                </div>

                <span style={{color: 'red'}}>{error && error}</span>

            </form>
        </div>
    );
};

