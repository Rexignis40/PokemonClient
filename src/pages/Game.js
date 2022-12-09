import "./Game.css";
import Header from "../components/Header.js";
import React, { useState } from "react";

function Game() {
  const [pos, setPos] = useState([10, 10]);
  const grass = Array.from(Array(20), () => new Array(20).fill(<img src="./img/Hautes_herbes.png" alt=""/>));
  grass[pos[0]][pos[1]] = <img src="./img/perso/Idle (1).png" alt=""/>;
    

    function handlePos(dir){
      switch(dir){
        case 'z':
          if(pos[0] - 1 < 1) break;
          setPos([pos[0] - 1, pos[1]]);
          break;
        case 's':
          if(pos[0] + 1 > 18) break;
          setPos([pos[0] + 1, pos[1]]);
          break;
        case 'q':
          if(pos[1] - 1 < 1) break;
          setPos([pos[0], pos[1] - 1]);
          break;
        case 'd':
          if(pos[1] + 1 > 18) break;
          setPos([pos[0], pos[1] + 1]);
          break;
      }
    }

    return (
      <>
      <Header />
      <p>Game</p>
      <div>
        {grass.map((row, j) => {
          return(
            <div key={j} className="grassRow">
          {row.map((tile, i) =>{
            return (<div key={i}>{tile}</div>);
          })}
          </div>);
        })}
      </div>
      <div><button onClick={() => handlePos('z')}>Up</button></div>
      
      <button onClick={() => handlePos('q')}>Left</button>
      <button onClick={() => handlePos('s')}>Down</button>
      <button onClick={() => handlePos('d')}>Rigth</button>
      </>
    );
  }
  
  export default Game;
  