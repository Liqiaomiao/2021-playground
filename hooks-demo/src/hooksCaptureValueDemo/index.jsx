import React, {useRef, useState} from 'react'
function MessageThread() {
    const [message, setMessage] = useState("");
    const lastestMessage = useRef('')
    const showMessage = () => {
        alert("You said: " + message);
        alert('useRef:'+lastestMessage.current)
    };

    const handleSendClick = () => {
        setTimeout(showMessage, 3000);
    };

    const handleMessageChange = e => {
        setMessage(e.target.value);
        lastestMessage.current = e.target.value
    };

    return (
        <>
            <input value={message} onChange={handleMessageChange} />
            <button onClick={handleSendClick}>Send</button>
        </>
    );
}

export default MessageThread
