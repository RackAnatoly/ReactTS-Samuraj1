import React, {useEffect} from 'react';
import {RootStateReduxType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";
import {Redirect, useParams} from 'react-router-dom';
import {usersApi} from "../../api/api";

type PathParamsType={
    UserID:string
}
type PropsType = PathParamsType & OwnPropsType

type mapStateToPropsType={
    profile:any
    isAuth:boolean

}
type mapDispatchToPropsType={
    setUserProfile:(profile:any)=>void
}
type OwnPropsType=mapStateToPropsType & mapDispatchToPropsType

function ProfileContainer(props: OwnPropsType) {
    const params = useParams()
    console.log(params);
    useEffect(() => {
        //usersApi.getProfile(params.userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [])
if (!props.isAuth) return <Redirect to='/login'/>
    return (
        <Profile profile={props.profile}/>
    )
}

const mapStateToProps = (state: RootStateReduxType):mapStateToPropsType => {
    return {
        profile: state.profilePages.profile,
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)