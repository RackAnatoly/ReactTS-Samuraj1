import React from 'react';
import styles from "./users.module.css";
import imagePhoto from "../../assets/images/images.png";
import {UsersPageType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (p: number) => void
    currentPage: number
    users: UsersPageType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress:(isFetching:boolean,id:number)=>void
    followingInProgress:[]
}

export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <span onClick={() => {
                    props.onPageChanged(1)
                }}
                      className={props.currentPage === 1 ? styles.selectedPage : ''}>{pages[0]}
                </span>
                <span onClick={() => {
                    props.onPageChanged(2)
                }}
                      className={props.currentPage === 2 ? styles.selectedPage : ''}>{pages[1]}
                </span>
                <span>...</span>
                <span
                    onClick={() => {
                        props.onPageChanged(pagesCount)
                    }}
                    className={props.currentPage === pagesCount ? styles.selectedPage : ''}>{pagesCount}
                </span>
            </div>
            <div>
            </div>
            {props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : imagePhoto} className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true,u.id)
                                usersApi.followUsers(u.id)
                                    .then(res => {
                                        if (res.data.resultCode == 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false,u.id)
                                    })

                            }}>unFollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true,u.id)
                                usersApi.unUnfollowUsers(u.id)
                                    .then(res => {
                                        if (res.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false,u.id)
                                    })
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
};
