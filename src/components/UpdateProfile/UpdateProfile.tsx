import React from 'react';
import s from './UpdateProfile.module.css'
import {useFormik} from "formik";
import {UpdateProfileTC} from "../../redux/profileReducer";
import {useAppDispatch} from "../../redux/hooks";

type FormikErrorType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

const UpdateProfile = () => {

    const dispatch = useAppDispatch()

    let formik = useFormik({
        initialValues: {
            fullName: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            }
        },
        onSubmit: values => {
            dispatch(UpdateProfileTC({values, lookingForAJob: !!'Yes'}))
            formik.resetForm()
        },
        // validate: (values) => {
        //     const errors: FormikErrorType = {}
        //     if (!values.email) {
        //         errors.email = 'email is required';
        //     }
        //     if (!values.password) {
        //         errors.password = 'password is required'
        //     }
        //     return errors
        // }
    })

    return (
        <div className={s.updateProfile}>
            <div className={s.updateProfileItem}>
                <span>Full name: </span>
                <input
                    type="text"
                    placeholder='full name'
                    {...formik.getFieldProps('fullName')}
                />
            </div>

            <div>
                <span>Looking for a job? </span>
                Yes <input
                type="radio"
                placeholder='lookingForAJob'
                value='Yes'
                name='lookingForAJob'
                onChange={formik.handleChange}
            />
                No
                <input
                    type="radio"
                    placeholder='lookingForAJob'
                    value='No'
                    name='lookingForAJob'
                    onChange={formik.handleChange}
                />

            </div>
            <div className={s.updateProfileItem}>
                <span>Your job: </span>
                <span>
                    <input
                        type="text"
                        placeholder='lookingForAJobDescription'
                        {...formik.getFieldProps('lookingForAJobDescription')}
                    /></span>
            </div>

            <div>


                <p>Contacts: </p>
                <p className={s.contact}><span>github</span> <span>
                    <input
                        type="text"
                        placeholder='github'
                        {...formik.getFieldProps('github')}/> </span></p>

                <p className={s.contact}><span>vk</span> <span>
                    <input
                        type="text"
                        placeholder='vk'
                        {...formik.getFieldProps('vk')}/>
                </span></p>
                <p className={s.contact}><span>facebook</span> <span>
                    <input
                        type="text"
                        placeholder='facebook'
                        {...formik.getFieldProps('facebook')}/>
                </span></p>
                <p className={s.contact}><span>instagram</span>
                    <span>
                    <input
                        type="text"
                        placeholder='instagram'
                        {...formik.getFieldProps('instagram')}/></span></p>
                <p className={s.contact}><span>twitter</span>
                    <span>
                    <input
                        type="text"
                        placeholder='twitter'
                        {...formik.getFieldProps('twitter')}/></span></p>
                <p className={s.contact}><span>website</span>
                    <span>
                    <input
                        type="text"
                        placeholder='website'
                        {...formik.getFieldProps('website')}/></span></p>
                <p className={s.contact}><span>youtube</span>
                    <span>
                    <input
                        type="text"
                        placeholder='youtube'
                        {...formik.getFieldProps('youtube')}/></span></p>
                <p className={s.contact}><span>mainLink</span>
                    <span>
                    <input
                        type="text"
                        placeholder='mainLink'
                        {...formik.getFieldProps('mainLink')}/></span></p>
            </div>

            <button type={'submit'}>Save</button>
        </div>
    );
};

export default UpdateProfile;