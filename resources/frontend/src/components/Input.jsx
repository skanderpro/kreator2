import React, { useState } from 'react'

function Input(props) {
  const [label, setLabel] = useState(false)

  /**
   * This function checks whether the value of the element is empty, 
   * and when the value is true, the state changes to true
   */
  const changeHandler = (e) => {
    e.currentTarget.value ? setLabel(true) : setLabel(false)
  }

  return (
    <div className={`form-input-item ${label ? 'done' : ''}`}>
      <label>{props.label}</label>
      <input
        type={`${props.type ? props.type : 'text'}`}
        onChange={changeHandler}
      />
    </div>
  )
}

export { Input }
