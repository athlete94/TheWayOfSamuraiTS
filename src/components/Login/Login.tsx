import React from 'react';
import {useFormik} from "formik";
import {AuthReducer, loginTC, setIsAuthTC} from "../../redux/authReducer";
import s from './Login..module.css'
import {Navigate} from "react-router-dom";
import {setError} from "../../redux/appReducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {

    let isLogin = useAppSelector(state => state.AuthReducer.isLogin)
    let captcha = useAppSelector(state => state.AuthReducer.captcha)
    const dispatch = useAppDispatch()

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'email is required';
            }
            if (!values.password) {
                errors.password = 'password is required'
            }
            return errors
        }

    })


    if (isLogin) {
        return <Navigate to={`/`}/>
    }

    return (
        <div className={s.login_form}>
            <p>To log in get registered here

                or use common test account credentials:

                Email: free@samuraijs.com

                Password: free</p>
            <form onSubmit={formik.handleSubmit} onChange={() => dispatch(setError(''))}>
                <div className={s.login_input}>
                    <input
                        type="text"
                        placeholder='email'
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ?
                    <div style={{color: 'red', textAlign: 'left'}}>{formik.errors.email}</div> : null}
                <div className={s.login_input}>
                    <input type="password"
                           placeholder='password'
                           {...formik.getFieldProps('password')}
                    />
                </div>
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: 'red', textAlign: 'left'}}>{formik.errors.password}</div> : null}
                <div className={s.checkbox}><label>
                    <input type="checkbox"
                           {...formik.getFieldProps('rememberMe')}
                           checked={formik.values.rememberMe}
                    />
                    <span>remember me</span>
                </label></div>

                {captcha && <div className={s.captcha}>
                    <img src={captcha} alt="captcha"/>
                    <input type="captcha"
                           placeholder='captcha'
                           {...formik.getFieldProps('captcha')}
                    />
                </div>
                }
                <div className={s.loginBtn}>
                    <button type={'submit'}>LOGIN</button>
                </div>

            </form>
        </div>
    );
};

export default Login
