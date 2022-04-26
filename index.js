import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function sum(a, b) {
    return a + b
}

function primeiroJSX() {
    return (
        <div className="teste">
            Victor Moreira - Introdução ao ReactJS
            <h1>Soma: {sum(10, 10)}</h1>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            Hello World
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)