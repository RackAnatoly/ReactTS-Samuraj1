import React from 'react';
import {UsersPageType} from "../../redux/redux-store";
import {Users} from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersApi} from "../../api/api";
import {followThunkCreator, getUsersThunkCreator, unFollowThunkCreator} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: UsersPageType,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: any) => void
    pageSize: number,
    totalUsersCount: any,
    currentPage: number
    setCurrentPage: (value: number) => void
    setTotalCountAC: (count: number) => void
    isFetching: boolean
    setToggleAC: (isFetching: boolean) => void,
    toggleFollowingProgress: (isFetching: boolean) => void,
    followingInProgress: any
    getUsersThunkCreator:(currentPage:number,pageSize:number)=>void
    unFollowThunkCreator:(UserId:number)=>void
    followThunkCreator:(UserId:number)=>void
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged(pageNumber: number) {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged.bind(this)}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    followThunkCreator={followThunkCreator}
                    unFollowThunkCreator={unFollowThunkCreator}
                />
            </>
        );
    }
}
