import "./Game.css";
import Header from "../components/Header.js";
import React, { useState } from "react";
import { createNoise2D } from 'simplex-noise';

const perlin = createNoise2D();
let startX = 10;
let startY = 10;
const grass = Array.from(Array(20), () => new Array(20).fill(""));
grass.map((row, i) =>{
  row.map((elm, j) =>{
    console.log(perlin(i, j));
    let t = Math.floor(Math.abs(perlin(i, j)) * 3) + 1;
    console.log(t);
    switch(t){
      case 1:
      grass[i][j] = {
        sprite: <img src="./img/Hautes_herbes.png" alt=""/>,
        type: 1
      }
      break;
      case 2:
      grass[i][j] = {
        sprite: <img src="./img/Water.png" alt=""/>,
        type: 2
      }
      break;
      case 3:
      grass[i][j] = {
        sprite: <img src="./img/Rock.webp" alt=""/>,
        type: 3
      }
      break;
      default:
        break;
    }
    grass[i][j]["hasPlayeur"] = false;
  });
});

function Game() {
  const [pos, setPos] = useState([startX, startY]);
  grass[pos[0]][pos[1]] = {
    sprite: <img src="./img/Hautes_herbes.png" alt=""/>,
    type: 1,
    hasPlayeur: true
  };
    

    function handlePos(dir){
      grass[pos[0]][pos[1]]["hasPlayeur"] = false;
      switch(dir){
        case 'z':
          if(pos[0] - 1 < 1 || grass[pos[0] - 1][pos[1]]["type"] !== 1){
            grass[pos[0]][pos[1]]["hasPlayeur"] = true;
            break;
          }
          setPos([pos[0] - 1, pos[1]]);
          break;
        case 's':
          if(pos[0] + 1 > 18 || grass[pos[0] + 1][pos[1]]["type"] !== 1){
            grass[pos[0]][pos[1]]["hasPlayeur"] = true;
            break;
          }
          setPos([pos[0] + 1, pos[1]]);
          break;
        case 'q':
          if(pos[1] - 1 < 1 || grass[pos[0]][pos[1] - 1]["type"] !== 1){
            grass[pos[0]][pos[1]]["hasPlayeur"] = true;
            break;
          }
          setPos([pos[0], pos[1] - 1]);
          break;
        case 'd':
          if(pos[1] + 1 > 18 || grass[pos[0]][pos[1] + 1]["type"] !== 1){
            grass[pos[0]][pos[1]]["hasPlayeur"] = true;
            break;
          }
          setPos([pos[0], pos[1] + 1]);
          break;
          default:
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
            if(tile["hasPlayeur"]){
              return (<div key={i}><img src="./img/Perso/Idle (1).png" alt=""/></div>);
            }
            return (<div key={i}>{tile["sprite"]}</div>);
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
  