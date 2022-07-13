import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpperCase = () => 
    {
        let upperCaseText = text.toUpperCase(); 
        setText(upperCaseText);
        props.showAlert("Text has been converted to UpperCase successfully", "success");
    }
    const handleLowerCase = () => 
    {
        let lowerCaseText = text.toLowerCase(); 
        setText(lowerCaseText);
        props.showAlert("Text has been converted to LowerCase successfully", "success");
    }

    const handleCLearTextCase = () => 
    {
        let clearText = ''; 
        setText(clearText);
        props.showAlert("Text has been cleared successfully", "success");
    }

    const handleCopyText = () => 
    {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied successfully", "success");
    }

    const handleRemoveExtraSpace = () => 
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed successfully", "success");
    }

    const onChangeHandler = (event) => 
    {
        setText(event.target.value);
    }

  const [text, setText] = useState('');

    let bg_color;     //Variables for textarea, bg-color and text-color in different modes
    let text_color;

  if(props.mode === 'primary')
  {
    bg_color = 'blue';
    text_color = 'white'
  }
  if(props.mode === 'success')
  {
    bg_color = 'green';
    text_color = 'white'
  }
  if(props.mode === 'light')
  {
    bg_color = 'white';
    text_color = 'black'
  }
  if(props.mode === 'dark')
  {
    bg_color = 'black';
    text_color = 'white'
  }
  
  return (
    <>
      <div>
        <h1 className="mt-5 mb-3">{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" style={{backgroundColor: bg_color , color: text_color}} id="myBox" rows="8" value={text} onChange={onChangeHandler}></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-secondary m-1" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-success m-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-warning m-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-danger m-1" onClick={handleCLearTextCase}>Clear Text</button>
      </div>

      <div className="container mt-3">
        <h2>Your text summery:</h2>
        <p><b>{text.split(" ").length}</b> Words</p>
        <p><b>{text.length}</b> Characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
        <h2 className="mt-3">Preview</h2>
        <p>{text.length>0? text: "Enter something in the textbox above to preview here"}</p>
      </div>
    </>
    
  )
}
