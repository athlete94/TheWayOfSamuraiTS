import React from 'react';
import {useFormik} from "formik";
import {loginTC, setIsAuthTC} from "../../redux/authReducer";
import s from './Login..module.css'
import {Navigate} from "react-router-dom";
import {setError} from "../../redux/appReducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    let isLogin = useAppSelector(state => state.AuthReducer.isLogin)
    const dispatch = useAppDispatch()

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
                {formik.touched.email && formik.errors.email ? <div style={{color: 'red', textAlign: 'left'}}>{formik.errors.email}</div> : null}
                <div className={s.login_input}>
                    <input type="password"
                           placeholder='password'
                           {...formik.getFieldProps('password')}
                    />
                </div>
                {formik.touched.password && formik.errors.password ? <div style={{color: 'red', textAlign: 'left'}}>{formik.errors.password}</div> : null}
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

            </form>
        </div>
    );
};

