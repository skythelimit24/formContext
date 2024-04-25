import React,{useContext, useState} from 'react'
import { TextField, Button } from '@mui/material';
import { myContext } from '../../Context';
const Form = () => {

   const {addInputData} =  useContext(myContext);
   const [text, setText] = useState("");
  const [number, setNumber] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        addInputData(text, number);
        setText("");
        setNumber("");
      };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="number"
        variant="outlined"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>

  )
}

export default Form