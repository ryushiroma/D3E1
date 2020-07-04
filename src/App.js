import React, {useState} from 'react';


function App() {
  
  const[idade,setIdade] = useState()

  const maior18 = (idade) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade < 18) reject('Menor de 18 anos')
      else resolve('Maior de 18 anos')
    }, 2000)

  })
  
  function confIdade (idade) {
  
     maior18(idade)
    .then(resp => console.log(`Sucesso: ${resp}`))
    .catch(err => console.log(err))
 
  }

  return (

  <div>

    <input type="number" onChange={(e) => setIdade(e.target.value)} value={idade}/>
    <button onClick={()=> confIdade(idade)}>Conferir Idade</button>
    
    
    
  </div>


  )

}

export default App;
