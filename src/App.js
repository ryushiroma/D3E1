import React, {useState} from 'react';



function App() {
  
  
  const maior18 = (idade) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade < 18) reject('Menor de 18 anos');
    }, 2000);
  });
  
  return (

  <div>{
    maior18(15)
    .then(resp => console.log(`Sucesso: ${resp}`))
    .catch(err => console.log(err))
      }
  </div>


  )

}

export default App;
