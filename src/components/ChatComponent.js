import { useState } from "react";

function ChatComponent (){

    const [prompt, setPrompt] = useState ('');
    const [chatResponse, setChatResponse ] = useState('');
    
    const askAi = async () => {
         try {
         const response =  await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`)
        const data = await response.text();
        console.log(data)
        setChatResponse(data)
        } catch (error) {
            console.error("Error generating response : ", error)
        }

    };
    

    return (
        <div>
            <h2>Talk to AI</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt">
            </input>
            <div>
            <button
                onClick={askAi}>Ask Ai</button>
                </div>
            <div className="output">
                    <p>{chatResponse}</p>
            </div>
         </div>
         
    );
}

export default ChatComponent;