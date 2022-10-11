import React from 'react';

export const WordInput = (props) => {

    function handleOnChange()
    {
        
        props.setWI(document.getElementById("word-input").value);
    }    
    

    return (
        <>   
            <label htmlFor="word-input">Enter word to be highlighted here</label>
            <input id="word-input" type={"text"} onChange={handleOnChange} />
        </>
    )
}