import React, {useState} from 'react';
//import './App.css'
import styled , { css } from 'styled-components'

const DivLoca = styled.div`
    background-color: props.parameter;
    height: 100px;
    width: 100px;
    border: 2px solid #000000;
    margin:10px;
`

function App() {
  const [quadrados, setQuadrados] = useState ([{color: 'blue'}])
 
  function createDiv(){
    setQuadrados([...quadrados, {color:'blue'}])
  } 

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   //var newColor = getRandomColor(); // #E943F0

   function handleHover(index){
    const novosQuadrados = [...quadrados]
    novosQuadrados[index] = {color: getRandomColor()}
    setQuadrados(novosQuadrados)
    }

  function handleLeave (index){
    const novosQuadrados = [...quadrados]
    novosQuadrados[index] = {color:'blue'}
    setQuadrados(novosQuadrados)  
  }

  return (
    <div className="App">
        <button onClick={createDiv}>Adicionar</button>    
    
        {
          quadrados.map((elemento,index) =>   {
          return (
            <DivLoca
            onMouseEnter={() => handleHover(index)} 
            onMouseLeave={() => handleLeave(index)}
            style={{backgroundColor: elemento.color}}
            >
                    Oi Mozi

            </DivLoca>)
          })
        }
    
        
        
    </div>
  );
}

export default App;
