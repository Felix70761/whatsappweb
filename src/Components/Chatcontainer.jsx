import React, {useState} from 'react'
import './Chatcontainer.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';
import ChatMessage from './ChatMessage';


function Chatcontainer() {

const [message, setMessage] = useState("");
const [openEmojiBox, setOpenEmojiBox] = useState(false);
  return (
    <div className='chat-container'>
        <div className="chat-container-header">
            <div className="chat-user-info">
                <div className="chat-user-img">
                    <img src="./user.png" alt="" />
                </div>
                <p>Felix Niyomugabo</p>
            </div>
            <div className="chat-container-header-btn">
                <MoreVertIcon/>
            </div>
        </div>
        {/*chat display container*/}
        <div className="chat-display-container">
            <ChatMessage message="hi how are you?" time="02-07-2022"/>
            <ChatMessage message="hi how are you?" time="02-07-2022"/>
            <ChatMessage message="hi how are you?" time="02-07-2022"/>
            <ChatMessage message="hi how are you?" time="02-07-2022"/>

        </div>
        {/*chatinput*/}
        <div className="chat-input">
            {/*buttons*/}
           {openEmojiBox && ( <Picker  onEmojiClick={(event, emojiObject) =>
        setMessage(message + emojiObject.emoji)
    }
        />
        )}
            <div className="chat-input-btn">
                <InsertEmoticonIcon onClick={() =>setOpenEmojiBox(!openEmojiBox)}/>
                <AttachFileIcon />

            </div>
            {/*text input elements*/}
            <form>
            <input type="text" placeholder='Type a message' value={message} 
            onChange={(e) =>{
                setMessage(e.target.value)
            }} />
            </form>
            {/*send button*/}
            <div className="chat-input-send-btn">
                <SendIcon/>

            </div>
        </div>
    </div>
  )
}

export default Chatcontainer