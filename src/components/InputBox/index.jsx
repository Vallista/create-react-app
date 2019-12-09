import React from 'react'

import './style.css'

const InputBox = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='input-box'>
      <input className='input' placeholder='입력해주세요..' onChange={onChange} />
      <button className='button' type='submit' onClick={onSubmit}>
        게시
      </button>
    </form>
  )
}

export default InputBox
