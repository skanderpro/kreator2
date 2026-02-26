import React, { useState } from 'react'

function Textarea(props) {
  const [textarea, setTextarea] = useState(false)

  const changeHandler = (e) => {
    e.currentTarget.value ? setTextarea(true) : setTextarea(false)
  }

  return (
    <div className={`form-input-textarea ${textarea ? 'done' : ''}`}>
      <label>{props.label}</label>
      <textarea 
        placeholder='Write your message..'
        onChange={changeHandler}
      />
    </div>
  )
}

export { Textarea }
