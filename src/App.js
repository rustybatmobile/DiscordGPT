import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [authId, setAuthId] = useState("");
  const [serverId, setServerId] = useState("");
  const [filterMessage, setFilterMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showPage1, setShowPage1] = useState(true);

  //  useEffect(() => {
  //   fetch("https://discord.com/api/v9/channels/1038466242174009428/messages?limit=50", {
  //     headers: {
  //       authorization: "OTc5NzMyNjU2Njk2NzQxOTc4.GRKcPs.jyVtYpPWrxNOfm4DVjBj8am31hiMI_EB2cJmA4"
  //     }
  //   }).then(response => response.json()).then(data => {
  //     console.log(data, "data");
  //   })
  // })

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to fetch relevant messages based on user input
    setMessages([{id: 1, author: "John", content: "Hello world!"}, {id: 2, author: "Jane", content: "How are you?"}]);
    setShowPage1(false);
  };

  const handleGoBack = () => {
    setShowPage1(true);
    setMessages([]);
  };

  return (
    <div className="App">
      {showPage1 ? (
        <div className="Page1">
          <h1>Welcome to DiscordGPT </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="authId">Authorization ID:</label>
            <input
              type="text"
              id="authId"
              value={authId}
              onChange={(event) => setAuthId(event.target.value)}
            />
            <label htmlFor="serverId">Server ID:</label>
            <input
              type="text"
              id="serverId"
              value={serverId}
              onChange={(event) => setServerId(event.target.value)}
            />
            <label htmlFor="serverId">Tell DiscordGPT how you would like to filter messages</label>
            <input
              type="text"
              id="filterMessage"
              value={filterMessage}
              onChange={(event) => setFilterMessage(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="Page2">
          <h1>Here are the relevant messages:</h1>
          <ul className="MessageList">
            {messages.map((message) => (
              <li key={message.id} className="MessageItem">
                <div className="MessageAuthor">{message.author}</div>
                <div className="MessageContent">{message.content}</div>
              </li>
            ))}
          </ul>
          <button onClick={handleGoBack}>Go back</button>
        </div>
      )}
    </div>
  );
}

export default App;
