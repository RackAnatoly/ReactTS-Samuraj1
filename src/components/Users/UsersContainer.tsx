import React from 'react';
import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {RootStateReduxType, UsersPageType} from "../../redux/redux-store";
import {
    followAC, followThunkCreator, getUsersThunkCreator,
    setCurrentPageAC, setFolowingProgresAC,
    setToggleAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC, unFollowThunkCreator
} from "../../redux/users-reducer";


type MapStatePropsType = {
    users: UsersPageType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:any
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (value: number) => void
    setTotalCountAC: (count: number) => void
    setToggleAC:(isFetching:boolean)=>void
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        users: state.usersPages,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingInProgress: state.usersPages.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow:followAC,
    unFollow:unFollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalCountAC:setTotalCountAC,
    setToggleAC:setToggleAC,
    toggleFollowingProgress:setFolowingProgresAC,
    getUsersThunkCreator,
    followThunkCreator,
    unFollowThunkCreator
})(UsersAPIComponent);