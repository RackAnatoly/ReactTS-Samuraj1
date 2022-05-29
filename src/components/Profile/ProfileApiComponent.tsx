import React from "react";
import axios from "axios";
import Profile from "./Profile";

type ProfileApiType={
    setUserProfile:(profile:any)=>void
    profile:any
}

export class ProfileApiComponent extends React.Component<ProfileApiType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
};
