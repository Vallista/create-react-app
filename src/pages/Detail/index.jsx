import React from 'react'
import './index.css'

import DB from '../../DB'

import Card from '../../components/Card'

const Detail = ({ location, match }) => {
  const getData = DB.filter((data) => data.id == match.params.id)
  const detailData = getData[0]

  return (
    <div className='detail-wrapper'>
      <Card
        picture={detailData.profile}
        name={detailData.name}
        created_at={detailData.created_at}
        description={detailData.description}
        likeCount={detailData.likeCount}
        commentCount={detailData.commentCount}
        onClick={() => {}}
      />
    </div>
  )
}

export default Detail
