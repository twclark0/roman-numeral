import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, updateText] = useState('')
  const [answer, updateAnswer] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const { romannumeral } = await (await fetch(
      `/romannumeral?query=${text}`
    )).json()
    updateAnswer(romannumeral)
  }
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={text}
          type="text"
          onChange={e => {
            updateText(e.currentTarget.value)
          }}></input>
        <input type="submit" value="Calculate" />
      </form>
      <h3>{answer}</h3>
    </div>
  )
}

export default App
