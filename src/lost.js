import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom';


function Lost() {
  const history = useHistory();

  return (
    <div>
<h1>you lost your way</h1>
<Button variant='contained' onClick={()=>history.push("/")}>Go Home</Button>
</div>
  )
}

export default Lost