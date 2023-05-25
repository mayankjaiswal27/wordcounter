import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <>
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <div className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</div>
  <div className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</div>
  <div className="container my-3">
    <h1>Word Counter</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes required to read this</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  )
}
