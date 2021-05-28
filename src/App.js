import React,{useState,useEffect,Component} from 'react'
// import "~@sl-codeblaster/react-3d-animated-card/dist/index.css";
import AnimatedCard from '@sl-codeblaster/react-3d-animated-card';
// import Card from 'react-animated-3d-card'
import './App.css';

function App()  {
  const [quote,setQuote]=useState("");

  const getQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then((data) => {
  let randomNum =Math.floor(Math.random()*data.length);
  setQuote(data[randomNum]);
    });
  };
  useEffect(()=>{
    getQuote();
  }, 
  []);
  return (
    <div className="App">
 <AnimatedCard className="card"
    config={{
        rotation: 15, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
        transition:{
            duration:0.5,
            timingMode: "ease"
        },
        transform:{
            figureIcon: {
                rotation: 20,
                translateZ: 160
            },
            titleTranslateZ: 140,
            bodyTextTranslateZ: 100,
            buttonTranslateZ: 80
        }
    }}
    style={{
         //container style (you can use className as well)
    }}
>

    <div className="">
        <div className="figure">
            <div className="figure_bg"/> 
            {/* <img src={require('./images/image.png').default} alt=""/> */}
        </div>
        <div className="content">
            <h2 className="title">Quote</h2>
            <p className={"body"}> {quote.text}</p>
        </div>
        <div className="footer">
        <button onClick={getQuote} className="btnget">Get Quote</button> 
        </div>
    </div>

</AnimatedCard>

    </div>
  );
}

export default App;
