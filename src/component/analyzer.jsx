import React, { useState } from 'react'

export default function Analyzer(props) {

    const [text, setText] = useState("Enter your Text here :")

    const handleText = () => {
        setText()
    }

    const countText = () => {
        let text = document.getElementById('textBox').value
        let countText = text.length
        document.getElementById('countText').innerHTML = "Total characters :" + countText
    }

    const countWord = () => {
        let text = document.getElementById('textBox').value
        let countWord = text.split(" ").length
        document.getElementById('countWord').innerHTML = "Total words :" + countWord
    }

    const clearText = () => {
        let text = document.getElementById('textBox').value
        setText(" ")
    }

    return (
        <>
        
            <div className="mb-3">
                <label className="form-label">{props.title}</label>
                <textarea className="form-control m-3" value={text} onChange={handleText} id="textBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={countText}>Count Text</button>
            <button className="btn btn-info m-1" onClick={countWord}>Count Word</button>
            <button className="btn btn-danger m-1" onClick={clearText}>Clear</button>
            <p id='countText'></p>
            <p id='countWord'></p>

        </>
    )
}
