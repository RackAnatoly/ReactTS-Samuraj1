import React from 'react';
import {UsersPageType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../assets/Wedges-3s-200px.svg'
import Preloader from "../../common/Preloader/Preloader";

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
    setToggleAC: (isFetching: boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setToggleAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleAC(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCountAC(response.data.totalCount)
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${5}`)
            .then(response => {
                this.props.setToggleAC(false);
                this.props.setUsers(response.data.items)
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
                />
            </>

        );
    }
}
