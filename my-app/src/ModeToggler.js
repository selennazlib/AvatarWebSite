import React, { useState } from 'react';

function ModeToggler() {
    const [darkModeOn, setIsChecked] = useState(false);
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>Light mode is on</h1>
    
    function handleClick(){
        setIsChecked(!darkModeOn);
    }
    React.useEffect(() => {
        document.title = darkModeOn ? "Dark Mode Avatar" : "Light Mode Avatar"
    })

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick} style={{ backgroundColor: darkModeOn ? '#222' : '#fff' , color: darkModeOn ? '#fff' : '#000' }}>
                Switch the Mode
            </button>
        </div>
    )
}

export default ModeToggler