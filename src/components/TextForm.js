import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () =>{
    setText("")
  }

    const handleOnChange = (event) =>{
      setText(event.target.value)
    }
  const [text, setText]=useState('');
  return (

    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div class="mb-3">
            
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>


    </>
  )
}
