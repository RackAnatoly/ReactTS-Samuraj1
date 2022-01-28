export type PostPropsType = {
    id?: number
    message: string
    LikesCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}

export let state = {
    posts: [
        {id: 1, message: 'hi, how are you ', LikesCount: 0},
        {id: 2, message: 'It\'s my first message', LikesCount: 53},
    ],
    dialogs: [
        {id: 1, name: 'Anatoli'},
        {id: 2, name: 'Tatsi'},
        {id: 3, name: 'Adrian'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
    ],
}
//
// export let stat = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'hi, how are you ', LikesCount: 0},
//             {id: 2, message: 'It\'s my first message', LikesCount: 53},
//         ],
//         dialogs: [
//             {id: 1, name: 'Anatoli'},
//             {id: 2, name: 'Tatsi'},
//             {id: 3, name: 'Adrian'},
//         ]
//     },
//     messagePage:{
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you'},
//             {id: 3, message: 'Yo'},
//         ],
//     }
// }