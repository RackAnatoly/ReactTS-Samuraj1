import React from 'react';
import {RootStateReduxType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileApiComponent} from "./ProfileApiComponent";
import {setUserProfile} from "../../redux/profile-reducer";

const mapStateToProps = (state: RootStateReduxType) => {
    return {
        profile: state.profilePages.profile

    }
}


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiComponent)