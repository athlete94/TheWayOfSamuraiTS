import React from "react";
import s from "./Users.module.css";
import {User} from "./User/User";
import axios from "axios";
import {followUnfollow, setUsers, UsersType} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";


type UsersClassPropsType = MapDispatchToPropsType & MapStateToPropsType


class UsersClass extends React.Component<UsersClassPropsType> {
    componentDidMount() {
        if(this.props.users.length === 0)
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                        this.props.setUsers(response.data.items)
                    }
                )
    }

    followHandler = (id: number, followed: boolean) => {
        this.props.follow(id, followed)
    }

    render() {
        return (
            <div className={s.users}>

                {this.props.users.map(u => (
                    <User
                        id={u.id}
                        key={u.id}
                        name={u.name}
                        photos={u.photos}
                        status={u.status}
                        followed={u.followed}
                        followHandler={this.followHandler}
                    />
                ))}
            </div>
        );
    }
}

export type MapStateToPropsType = {
    users: Array<UsersType>
}
export type MapDispatchToPropsType = {
    setUsers: (users: Array<UsersType>) => void
    follow: (id: number, followed: boolean) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.UsersReducer.users
    }
}

const UsersContainer = connect(mapStateToProps, {
    setUsers,
    followUnfollow,
})(UsersClass)


export default UsersContainer