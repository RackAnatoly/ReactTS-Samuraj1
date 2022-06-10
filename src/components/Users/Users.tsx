import React from 'react';
import styles from "./users.module.css";
import imagePhoto from "../../assets/images/images.png";
import {UsersPageType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import axios from 'axios';

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (p: number) => void
    currentPage: number
    users: UsersPageType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
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
                        <NavLink to ={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : imagePhoto} className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"6c9ada99-ecd2-401f-9bb3-7081b3d8bee6"
                                    }
                                })
                                    .then(res=>{
                                        if(res.data.resultCode==0){
                                            props.unFollow(u.id)
                                        }
                                    })

                            }}>unFollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"6c9ada99-ecd2-401f-9bb3-7081b3d8bee6"
                                    }
                                })
                                    .then(res=>{
                                        if(res.data.resultCode==0){
                                            props.follow(u.id)
                                        }
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
