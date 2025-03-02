import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Join.css';

const Join = () => {
  const [ name, setName ] = useState('');
  const [ room, setRoom ] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h2 className="heading">Join Room</h2>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div> 
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
  