import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert] = useState(null);

  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);

    },3000);
  }


  const changestyle=()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("Dark mode has been enabled","success")
        
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled","success")
     
    }
   }
  return (
  <>
  <Navbar mode={mode} changestyle={changestyle} />
  <Alert alert={alert}/> 
   
  <Textarea  mode={mode} showalert={showalert}/>
    </>


  );
}

export default App;
