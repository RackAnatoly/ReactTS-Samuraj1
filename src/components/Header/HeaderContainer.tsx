import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    setAuthUserDataAC: (data: any) => void
}

export class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(res => {
                    if (res.data.resultCode === 0) {
                        const {id, email, login} = res.data.data;
                        this.props.setAuthUserDataAC({id, email, login})
                    }
                }
            )
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateReduxType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export const HeaderContainerMain = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)