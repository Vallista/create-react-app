import React from 'react'
import './index.css'

const Card = ({ picture, name, created_at, description, likeCount, commentCount, onClick }) => {
  return (
    <div className='card-wrapper' onClick={onClick}>
      <div className='card-header'>
        <img className='card-profile' src={picture} alt='profile' />
        <div className='card-name'>
          <span className='name'>{name}</span>
          <span className='time'>{created_at}</span>
        </div>
      </div>
      <div className='card-description-wrapper'>
        <p className='card-description'>{description}</p>
      </div>
      <div className='card-footer'>
        <span className='card-likes'>누구누구님 외 {likeCount - 1}명</span>
        <span className='card-comments'>댓글 {commentCount}개</span>
      </div>
    </div>
  )
}

export default Card
