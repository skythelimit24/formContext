import React, { useContext } from 'react';
import { myContext } from '../../Context';
import { Paper, TableBody, TableContainer, TableRow ,TableHead }  from '@mui/material';

const Table = () => {
  const {data} = useContext(myContext)
  console.log(data)
  return (
    <>
     <TableContainer component={Paper}>
      
        <TableHead>
          <tr>
            <TableHead>Text</TableHead>
            <TableHead>Number</TableHead>
          </tr>
        </TableHead>
        <TableBody>
          {data.map(({ text, number }, index) => (
            <tr key={index}>
              <td>{text}</td>
              <td>{number}</td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>   
 
    </>
  )
}

export default Table