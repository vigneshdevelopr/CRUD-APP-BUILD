import React from 'react'

function Base({head,body,children}) {
  return (
<div className='main-component'>
    <header>
        <h1>{head}</h1>
    </header>
    <main className='main-segment'>
<h3>{body}</h3>
<div className='children-segment'>
    {children}
</div>
    </main>
</div>

    )
}

export default Base