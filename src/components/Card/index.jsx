import React from 'react'

import './style.css'

const Card = ({ profileImg, userName, mainImg, likeCount, description, commentCount }) => {
  return (
    <div className='card-wrapper'>
      <div className='header'>
        <div className='left'>
          <img className='profile icon' src={profileImg} alt='profile-image' />
          <p className='title'>{userName}</p>
        </div>
        <img
          className='more-button icon'
          src='http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg'
          alt='more-button'
        />
      </div>
      <div className='cover'>
        <div
          style={{
            backgroundImage: `url('${mainImg}')`
          }}
          className='cover-img'
        />
      </div>
      <div className='icons'>
        <div className='left-icons'>
          <img
            src='http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg'
            alt='heart'
            className='icon'
          />
          <img
            src='http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg'
            alt='talk'
            className='icon'
          />
          <img
            src='http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg'
            alt='share'
            className='icon'
          />
        </div>
        <img
          src='http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg'
          alt='save'
          className='icon'
        />
      </div>
      <div className='footer'>
        <p className='like-message'>좋아요 {likeCount}개</p>
        <p className='descriptions'>
          <span className='name'>{userName}</span>
          {description}
          <span className='more-text'>더보기</span>
        </p>
        <p className='more-comment'>댓글 {commentCount}개 모두 보기</p>
      </div>
    </div>
  )
}

export default Card
