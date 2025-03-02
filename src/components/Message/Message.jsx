import React from 'react';
import ReactEmoji from 'react-emoji';
// #11
import './Message.css'

const Message = ({message: {user, text}, name})=>{

    const trimmedName = name.trim().toLowerCase();
    let isSentByCurrentUser = (user === trimmedName);
   

    return (
        isSentByCurrentUser ?
        (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )   :
        (
            <div className="messageContainer justifyStart">
                <p className="sentText pl-10">{user}</p>
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                
            </div>
        )
    );

}

export default Message;
