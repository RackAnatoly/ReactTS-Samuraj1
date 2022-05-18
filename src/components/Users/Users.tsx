import React from 'react';
import styles from './users.module.css';
import {UsersPageType} from "../../redux/redux-store";
import axios from "axios";
import imagePhoto from'../../assets/images/images.png'

type UsersPropsType={
    users: UsersPageType,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users:any)=>void
}

export const Users = (props:UsersPropsType) => {
    if (props.users.users.length===0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small!==null?u.photos.small:imagePhoto} className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unFollow(u.id)}}>unFollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
//
//     props.setUsers([{
//     id: 1,
//     photoUrl:'https://sun6-20.userapi.com/s/v1/if1/-O35cHpfdw6chHZfv4BoYKPrFfF607QE8jNgZKw8OBCPHoiFMbqE-c5xMCQgYsVkYxxxnAfu.jpg?size=200x200&quality=96&crop=21,10,699,699&ava=1',
//     followed: false,
//     fullName: 'Anatoli ',
//     status: 'I am a boss',
//     location: {city: 'Gdansk', country: 'Poland'}
// },
//     {
//         id: 2,
//         photoUrl:'https://sun6-20.userapi.com/s/v1/if1/-O35cHpfdw6chHZfv4BoYKPrFfF607QE8jNgZKw8OBCPHoiFMbqE-c5xMCQgYsVkYxxxnAfu.jpg?size=200x200&quality=96&crop=21,10,699,699&ava=1',
//         followed: true,
//         fullName: 'Tatsi ',
//         status: 'I am a lady',
//         location: {city: 'Gdansk', country: 'Poland'}
//     },
//     {
//         id: 3,
//         photoUrl:'https://sun6-20.userapi.com/s/v1/if1/-O35cHpfdw6chHZfv4BoYKPrFfF607QE8jNgZKw8OBCPHoiFMbqE-c5xMCQgYsVkYxxxnAfu.jpg?size=200x200&quality=96&crop=21,10,699,699&ava=1',
//         followed: true,
//         fullName: 'Adrian ',
//         status: 'I am a son',
//         location: {city: 'Gdansk', country: 'Poland'}
//     },])}