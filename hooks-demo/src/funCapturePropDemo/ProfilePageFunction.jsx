import React from 'react';

function ProfilePage(props) {
    console.log('rendering',props);
    const showMessage = () => {
        console.log('showMessage',props);
        alert('Followed ' + props.user);
    };

    const handleClick = () => {
        setTimeout(showMessage, 5000);
    };

    return (
        <>
        <button onClick={handleClick}>Follow</button>
        </>
    );
}

export default ProfilePage;
