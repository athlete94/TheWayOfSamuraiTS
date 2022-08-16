import React, {useState} from 'react';
import s from './UserContacts.module.css'
import set = Reflect.set;
import {useAppSelector} from "../../../../redux/hooks";


const UserContacts = () => {
    const [show, setShow] = useState<boolean>(false)
    const {
        github,
        facebook,
        instagram,
        mainLink,
        twitter,
        vk,
        website,
        youtube
    } = useAppSelector(state => state.profileReducer.userProfile.contacts)

    return (
        <div className={s.userContacts}>
            <button onClick={() => setShow(!show)}>Contacts {show ? '▴' : '▾'}</button>

            {show && <div className={s.userContacts_content}>
                <p>{github}</p>
                <p>{facebook}</p>
                <p>{instagram}</p>
                <p>{mainLink}</p>
                <p>{twitter}</p>
                <p>{vk}</p>
                <p>{website}</p>
                <p>{youtube}</p>
            </div>}
        </div>
    );
};

export default UserContacts;