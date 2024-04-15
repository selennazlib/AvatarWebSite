import React from "react";

function Btn() {
    const clickHandler = () => console.log('Clicked')
    return (
        <button onClick={clickHandler}>Click Here!</button>
    )
}

export default Btn;