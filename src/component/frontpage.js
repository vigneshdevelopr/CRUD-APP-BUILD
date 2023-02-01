import React from 'react'
import { Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StudentDetails } from './Products';
import { useHistory } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function FrontPage() {
  const history = useHistory();

  return (
    <div className='FrontPage'>
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"

    >


<h1>Welcome to shopify</h1>
<Button onClick={()=>history.push("/home")}>Add Product</Button>

</ThemeProvider>
</div>

  )
}

export default FrontPage