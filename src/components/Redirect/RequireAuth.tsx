import {Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

export function RequireAuth({ children }: { children: JSX.Element }) {

    let isLogin = useSelector<AppStateType, boolean>(state => state.AuthReducer.isLogin)
    if (!isLogin) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

