import React, { useState } from 'react'
import './TextForm.css'

export default function TextForm(props) {
    // state (useState) is used here
    const [text, setText] = useState('');

    // function for button click event
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const reverseText = () => {
        let newtext = text.split('').reverse().join('');
        setText(newtext);
    }

    const wordCount = () => {
        let newtext = text.split(' ').filter(word => word.length > 0).length;
        setText(text + "\nWord Count: " + newtext);
    }

    const removeSpaces = () => {
        let newtext = text.replace(/\s+/g, ' ').trim();
        setText(newtext);
    }

    const copy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            console.log('Text copied to clipboard using fallback method');
        }
    }

    // function for handling text insert
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container mt-4">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea onChange={handleOnChange} className="form-control" id="myBox" rows="7" value={text} placeholder='Enter text here'></textarea>
                </div>
                <div className="flex">
                    <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-dark" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-dark" onClick={reverseText}>Reverse Text</button>
                    <button className="btn btn-dark" onClick={wordCount}>Count Words</button>
                    <button className="btn btn-dark" onClick={copy}>Copy</button>
                    <button className="btn btn-dark" onClick={removeSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-4">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{
                    return element.length!==0
                }).length} words, {text.length} characters</p>
                <p>This will take {0.008 * text.split(" ").filter((element)=>{
                    return element.length!==0
                }).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here!"}</p>
            </div>
        </>
    )
}
