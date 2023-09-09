import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();

    const uniqueId = uuidv4();

    setRoomId(uniqueId);

    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username)
      return toast.error("ROOM ID && USERNAME are required");

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username: username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/code-sync.png" alt="code-sync" className="homePageLogo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            placeholder="ROOM ID"
            className="inputBox"
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
            value={roomId}
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="inputBox"
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
            value={username}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create one &nbsp;
            <a
              onClick={createNewRoom}
              href="Placeholder"
              className="createNewBtn"
            >
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💚 by <a href="https://github.com/AliHosaam">Ali Hosam</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
