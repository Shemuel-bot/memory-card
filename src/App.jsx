import { useEffect, useState } from "react";
import ShuffleCards from "./shuffleCards";
import ImageCards from "./ImageCards";
import "./App.css";

let highScore = 0;
let names = [];

function ChangeHighScore(score){
  if(score > highScore)
    highScore = score;
}

function App() {
  const [score, setScore] = useState(0);
  ChangeHighScore(score);
  const changeValues = (ids)=>{
    if(!names.includes(document.getElementById(ids).nextSibling.textContent)){
      names.push(document.getElementById(ids).nextSibling.textContent);
      setScore(score + 1);
      }else {
        setScore(0);
        names = [];
      }
  }

  useEffect(()=>{
    ShuffleCards();
    return ()=>{
    }
  }, [score])


  return (
    <>
      <h1>Memory Card</h1>
      <h2>Score: {score}</h2>
      <h2>Highscore: {highScore}</h2>
      <div id="main">
        <div onClick={() => {changeValues('img1')}}>
        <ImageCards id={'img1'} />
        </div>
        
        <div onClick={() => {changeValues('img2')}}>
        <ImageCards id={'img2'} />
        </div>

        <div onClick={() => {changeValues('img3')}}>
        <ImageCards id={'img3'} />
        </div>

        <div onClick={()=>{changeValues('img4')}}>
        <ImageCards id={'img4'} />
        </div>

        <div onClick={()=>{changeValues('img5')}}>
        <ImageCards id={'img5'} />
        </div>

        <div onClick={()=>{changeValues('img6')}}>
        <ImageCards id={'img6'} />
        </div>

        <div onClick={()=>{changeValues('img7')}}>
        <ImageCards id={'img7'} />
        </div>

        <div onClick={()=>{changeValues('img8')}}>
        <ImageCards id={'img8'} />
        </div>

        <div onClick={()=>{changeValues('img9')}}>
        <ImageCards id={'img9'} />
        </div>

        <div onClick={()=>{changeValues('img10')}}>
        <ImageCards id={'img10'} />
        </div>

        <div onClick={()=>{changeValues('img11')}}>
        <ImageCards id={'img11'} />
        </div>

        <div onClick={()=>{changeValues('img12')}}>
        <ImageCards id={'img12'} />
        </div>
      </div>
    </>
  );
}

export default App;
