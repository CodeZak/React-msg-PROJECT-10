import { useState } from "react";

function App() {
    const [messages, setMessages] = useState(["a", "b"]);

    return (
        <div className="container">
            {messages.length === 0 ? (
                <h1>You're all caugth up!</h1>
            ) : (
                <h1>
                    You have {messages.length} unread{" "}
                    {messages.length === 1 ? "message" : "messages"}
                </h1>
            )}
        </div>
    );
}

export default App;
