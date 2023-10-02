import React from "react";
import "./Header.css";
import categories from "../data/category";

import {
  MenuItem,
  TextField,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";



const Header = ({category,setCategory, word,setWord}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },

      mode: "dark",
    },
  });
  const handleChange = (language) => {
    setCategory(language)
    setWord('')

  }
  return (
    <div className="header">
      <span className="title">{word ? word : 'Word Hunt'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
          className="search" 
          label='search a word'
          value={word}
          onChange={(e)=>setWord(e.target.value)}


           />
          <TextField
            className="select"
            label="language"
            value= {category}
            onChange={(e)=>handleChange(e.target.value) }
            select
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label} >{option.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
