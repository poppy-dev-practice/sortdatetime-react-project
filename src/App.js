import React, { useState, useEffect } from 'react'
import './App.css'
import 'h8k-components'

import Articles from './components/Articles'
import Buttons from './components/Buttons'

const title = 'Sorting Articles'

function App({ articles }) {

  let[set,unset] = useState(true)
  useEffect(()=>{},[set])

  const sortvote = ()=>{
    let res
    articles.sort((a,b)=>{
       return  a.upvotes>b.upvotes ? -1 :  b.upvotes>a.upvotes ? 1:0
    })
    res = articles
    return res
}

const sortdate = ()=>{
    let res
    articles.sort((a,b)=>{
      return a.date>b.date ? -1 :  b.date>a.date ? 1:0
    })
     res = articles
    return res
}



  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <Buttons  unset={unset}/>
      <Articles articles={set?sortvote():sortdate()} />
      
    </div>
  )
}

export default App
