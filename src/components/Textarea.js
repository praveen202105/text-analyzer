import React, { useState } from 'react'


const Textarea = (props) => {
const [text,setText]=useState("")

   const convertupper = ()=>{
        if(text.length===0){
            return props.showalert("Please enter the text","warning") 
        }else{
         
            let newtext=text.toUpperCase();
            setText(newtext);
            props.showalert("Converted into uppercase","success")

        }
   }
  
   const convertlower = ()=>{
    if(text.length===0){
        return props.showalert("Please enter the text","warning") 
    }else{
     
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted into lowercase","success")
    }
    
}


const removespaces = ()=>{
    
    if(text.length===0){
        return props.showalert("Please enter the text","warning") 
    }else{
     
        let newtext=text.replace(/\s+/g, ' ').trim()
        setText(newtext);
        props.showalert("Spaces has been removed","success")   
     }
}
 

const removeDuplicatedLines =()=>{
    if(text.length===0){
        return props.showalert("Please enter the text","warning") 
    }else{
     
        let newLineExpression = /\r\n|\n\r|\n|\r/g;
        let Lines = text => [...new Set(text.split(newLineExpression))].join('\n'); 
        setText(Lines(text));
        props.showalert("Duplicate lines are removed","success")
     }
    
}


const removeBlankLines =()=>{
    if(text.length===0){
        return props.showalert("Please enter the text","warning") 
    }else{
        let newtext=text.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');
        setText(newtext);
        props.showalert("Blank Lines are removed","success")
   }

}

const copytext = ()=>{
    if(text.length===0){
        return props.showalert("Please enter the text","warning") 
    }else{
        navigator.clipboard.writeText(text);
        props.showalert("Text Copied","success") 
   }

}


const cleartext =()=>{
    if(text.length===0){
        return props.showalert("Please enter the text","warning") 
    }else{
        setText(""); 
        props.showalert("Cleared","success")
    }
}
    

const handleOnChange =(event)=>{
      console.log("On change");
      setText(event.target.value);
    }


    function countWords(str) {
        if(str.length==0) return 0;
        return str.match(/\w+/g).length;
      }

    return (
    <>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
            
    <h1>Enter text to analyze</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange}  value={text} rows="8" padding="5"
    ></textarea>
    <button type="button" className="btn btn-primary my-5 mx-2" onClick={convertupper}>Convert To Uppercase</button>
    <button type="button" className="btn btn-primary my-5 mx-2" onClick={convertlower}>Convert To Lowercase</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={copytext}>copy</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={removespaces}>remove spaces</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={removeDuplicatedLines}>remove duplicate lines</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={removeBlankLines}>remove Blank lines</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={cleartext}>Clear</button>
  
     
    

  </div>

 <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
<h1>text summary</h1>

<p >{countWords(text)} words and {text.length} characters</p>
<h2>
    Preview
</h2>
<p>{text}</p>
</div> 

</>
  )
}

export default Textarea;
