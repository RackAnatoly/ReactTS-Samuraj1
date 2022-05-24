import React from 'react';
import styles from "./users.module.css";
import imagePhoto from "../../assets/images/images.png";
import {UsersPageType} from "../../redux/redux-store";

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
                {/*{pages.map((p: number) => {*/}
                {/*    return <span onClick={() => {*/}
                {/*        props.onPageChanged(p)*/}
                {/*    }}*/}
                {/*                 className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>*/}
                {/*})}*/}
            </div>
            {props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : imagePhoto} className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
