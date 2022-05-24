import React from 'react';
import styles from './users.module.css';
import {UsersPageType} from "../../redux/redux-store";
import axios from "axios";
import imagePhoto from '../../assets/images/images.png'
import {Users} from "./Users";

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
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCountAC(response.data.totalCount)
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${100}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged.bind(this)}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        );
    }
}
