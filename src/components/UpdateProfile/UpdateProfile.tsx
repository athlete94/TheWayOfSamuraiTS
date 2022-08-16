import React from 'react';
import s from './UpdateProfile.module.css'
import {useFormik} from "formik";
import {UpdateProfileTC} from "../../redux/profileReducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

type FormikErrorType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string

}



const UpdateProfile = () => {
    const {aboutMe, fullName, lookingForAJobDescription } = useAppSelector(state => state.profileReducer.userProfile)
    const {website, github} = useAppSelector(state => state.profileReducer.userProfile.contacts)
    const dispatch = useAppDispatch()

    let formik = useFormik({
        initialValues: {
            aboutMe: aboutMe,
            fullName: fullName,
            lookingForAJob: '',
            lookingForAJobDescription: lookingForAJobDescription,
            github: github,
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: website,
            youtube: '',
            mainLink: '',
        },
        onSubmit: values => {
            dispatch(UpdateProfileTC({values}))
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
        <form onSubmit={formik.handleSubmit} className={s.updateProfile}>
            <div className={s.updateProfileItem}>
                <span>About me: </span>
                <input
                    type="text"
                    placeholder='aboutMe'
                    {...formik.getFieldProps('aboutMe')}
                />
            </div>
            <div className={s.updateProfileItem}>
                <span>Full name: </span>
                <input
                    type="text"
                    placeholder='full name'
                    {...formik.getFieldProps('fullName')}
                />
            </div>

            <div className={s.updateProfileItem}>
                <span>Looking for a job? </span>
                <label>
                    <input type="radio"
                           name="lookingForAJob"
                           value="Yes"
                    onChange={formik.handleChange}/>
                    Yes
                </label>
                <label>
                    <input type="radio"
                           name="lookingForAJob"
                           value="No"
                           onChange={formik.handleChange}/>
                    No
                </label>
            </div>
            <div className={s.updateProfileItem}>
                <span>Your job: </span>

                    <input
                        type="text"
                        placeholder='lookingForAJobDescription'
                        {...formik.getFieldProps('lookingForAJobDescription')}
                    />
            </div>

            <div>


                <p>Contacts: </p>
                <p className={s.contact}><span>github</span>
                    <input
                        type="text"
                        placeholder='github'
                        {...formik.getFieldProps('github')}/></p>

                <p className={s.contact}><span>vk</span>
                    <input
                        type="text"
                        placeholder='vk'
                        {...formik.getFieldProps('vk')}/>
                </p>
                <p className={s.contact}><span>facebook</span>
                    <input
                        type="text"
                        placeholder='facebook'
                        {...formik.getFieldProps('facebook')}/>
                </p>
                <p className={s.contact}><span>instagram</span>
                    <input
                        type="text"
                        placeholder='instagram'
                        {...formik.getFieldProps('instagram')}/></p>
                <p className={s.contact}><span>twitter</span>

                    <input
                        type="text"
                        placeholder='twitter'
                        {...formik.getFieldProps('twitter')}/></p>
                <p className={s.contact}><span>website</span>

                    <input
                        type="text"
                        placeholder='website'
                        {...formik.getFieldProps('website')}/></p>
                <p className={s.contact}><span>youtube</span>

                    <input
                        type="text"
                        placeholder='youtube'
                        {...formik.getFieldProps('youtube')}/></p>
                <p className={s.contact}><span>mainLink</span>
                    <input
                        type="text"
                        placeholder='mainLink'
                        {...formik.getFieldProps('mainLink')}/></p>
            </div>

            <button type={'submit'}>Save</button>
        </form>
    );
};

export default UpdateProfile;