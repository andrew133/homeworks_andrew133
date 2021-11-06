import React from 'react'
import Message from "./Message";
import s from "./Message.module.css";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Sveta',
    message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    time: '22:00',
}

function HW1() {
    return (
        <div className={s.Message}>
            <hr/>
            homeworks 1
            <div>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
