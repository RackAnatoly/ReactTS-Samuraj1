import React, {useEffect} from 'react';
import {RootStateReduxType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";
import { useParams } from 'react-router-dom';

type PathParamsType={
    UserID:string
}
type PropsType = PathParamsType & OwnPropsType

type mapStateToPropsType={
    profile:any
}
type mapDispatchToPropsType={
    setUserProfile:(profile:any)=>void
}
type OwnPropsType=mapStateToPropsType & mapDispatchToPropsType

function ProfileContainer(props: OwnPropsType) {
    const params = useParams()
    console.log(params);
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [])
    return (
        <Profile profile={props.profile}/>
    )
}

const mapStateToProps = (state: RootStateReduxType):mapStateToPropsType => {
    return {
        profile: state.profilePages.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)