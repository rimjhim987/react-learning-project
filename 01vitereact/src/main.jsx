import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function google(){
    return(
        <div>
            <p>my name is Rimjhim singh!</p>
        <h1>Rimjhim</h1>
        </div>  
    )   
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com">visit to google</a>
)

const anotherElement2 = "chai aur code"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click me to visit google website',
    anotherElement2

)


createRoot(document.getElementById('root')).render(
 
    reactElement
  
)
