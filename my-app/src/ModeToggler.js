import React, { useState } from 'react';

function ModeToggler() {
    const [darkModeOn, setIsChecked] = useState(false);
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>Light mode is on</h1>
    
    function handleClick(){
        setIsChecked(!darkModeOn);
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick} style={{ backgroundColor: darkModeOn ? '#222' : '#fff' }}>
                Switch the Mode
            </button>
        </div>
    )
}

export default ModeToggler