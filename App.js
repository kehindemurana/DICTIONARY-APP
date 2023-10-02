
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container, } from '@material-ui/core';
import Header from './components/Header';
import Definitions from './components/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';

import { DarkMode } from '@material-ui/core';

function App() {
  const [meanings, setMeanings] = useState ([])
  const [word,setWord] = useState ('')
  const [category, setCategory] = useState ('en')

  const DarkMode = (({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: ([600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

 

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
       
      setMeanings(data.data)

    } catch(error) {
      console.log(error)
    }
  }
 // console.log(meanings);
  useEffect(()=>{
    dictionaryApi()

  }, [word,category] )
  return (
    <div className="App" style={{height:'100vh', backgroundColor:'#282c34', color:'white' }} >
      <Container maxWidth='md' style={{display:'flex', flexDirection:'column', height:'100vh'}} >
       <div style={{position:'absolute', top:0, right:15, paddingTop:10 }}>
        switch
        </div>
        <Header category={category}
         setCategory={setCategory}
          word={word}
           setWord={setWord} />
           {meanings && (
            <Definitions word={word}
            meanings={meanings} 
             category={category} />
              )}
      </Container>
     
    </div>
  );
}

export default App;
