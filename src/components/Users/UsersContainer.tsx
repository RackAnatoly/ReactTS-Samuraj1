import React from 'react';
import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {RootStateReduxType, UsersPageType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setToggleAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";


type MapStatePropsType = {
    users: UsersPageType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
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
        isFetching: state.usersPages.isFetching
    }
}


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (value: number) => {
//             dispatch(setCurrentPageAC(value))
//         },
//         setTotalCountAC: (count: number) => {
//             dispatch(setTotalCountAC(count))
//         },
//         setToggleAC:(isFetching:boolean)=>{
//             dispatch(setToggleAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow:followAC,
    unFollow:unFollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalCountAC:setTotalCountAC,
    setToggleAC:setToggleAC
})(UsersAPIComponent);