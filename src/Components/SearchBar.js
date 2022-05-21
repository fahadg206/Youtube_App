import React, { useState } from "react";

const SearchBar = ({ onUserInputSubmit }) =>  {
    
    const [userInput, setUserInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        onUserInputSubmit(userInput)
    }

    return (
        <div className=" search-bar ui segment">
            <form 
            className="ui form"
            onSubmit={onSubmit}
            >
                <div className="field">
                <label>Video Search</label> 
                <input 
                type="text" 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)}
                />
                </div>
            </form>
        </div>
    )
    
}

export default SearchBar