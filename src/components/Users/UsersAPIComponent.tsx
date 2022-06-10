import React from 'react';
import {UsersPageType} from "../../redux/redux-store";
import {Users} from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersApi} from "../../api/api";

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
    followingInProgress: boolean
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setToggleAC(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToggleAC(false)
                this.props.setUsers(data.items);
                this.props.setTotalCountAC(data.totalCount)
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleAC(true);

        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleAC(false);
                this.props.setUsers(data.items)
            })
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
                />
            </>

        );
    }
}
