import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => [
    <h1 key= 'h1'>Bom dia {props.nome}!</h1>,
    <h2 key= 'h2'>Até Breve</h2>
]
 /* voce usa dois elementos dentro de um react.fragment ou em uma div.
  como está nos 2 exemplos abaixo */
     
// export default props => 
//     <React.fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </React.fragment>

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </div>