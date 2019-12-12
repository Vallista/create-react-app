import React from 'react'
// import { Link } from 'react-router-dom' // Link를 사용하는 것은 Element를 사용하는 방법
import './index.css'

import DB from '../../DB'

import Card from '../../components/Card'

const Home = ({ history }) => {
  // console.log(location, match)

  const moveTo = (pageName) => {
    // programmable = 코딩 가능한 방법
    history.push(pageName) // 내역을 남기고 이동
    // history.replace(pageName) // 내역을 남기지 않고 이동
  }

  const createCardElements = DB.map((data) => (
    <Card
      picture={data.profile}
      name={data.name}
      created_at={data.created_at}
      description={data.description}
      likeCount={data.likeCount}
      commentCount={data.commentCount}
      onClick={() => {
        moveTo(`/detail/${data.id}`)
      }}
      key={data.id}
    />
  ))

  return (
    <div className='home-wrapper'>
      {createCardElements}
      {/* <p>홈 페이지</p>
      <button
        onClick={() => {
          moveTo('/detail')
        }}
      >
        상세 페이지로 이동
      </button> */}
      {/* <Link to='/detail'>상세 페이지로 이동</Link> */}
    </div>
  )
}

export default Home
