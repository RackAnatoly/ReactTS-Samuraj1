import React from 'react';
import styles from './users.module.css';
import {UsersPageType} from "../../redux/redux-store";
import axios from "axios";
import imagePhoto from '../../assets/images/images.png'

type UsersPropsType = {
    users: UsersPageType,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: any) => void
    pageSize: number,
    totalUsersCount: any,
    currentPage: number
    setCurrentPage: (value: number) => void
    setTotalCountAC:(count:number)=>void
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCountAC(response.data.totalCount)
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map((p: any) => {
                        return <span onClick={() => this.onPageChanged(p)}
                                     className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                    })}
                </div>
                {/*<button onClick={getUsers}>Get Users</button>*/}
                {this.props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : imagePhoto} className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
                }
            </div>
        );
    }
}
