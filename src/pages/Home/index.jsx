import React from 'react'

import InputBox from '../../components/InputBox'
import Card from '../../components/Card'

class Home extends React.Component {
  state = {
    inputMessage: '',
    models: []
  }

  changeMessage = (event) => {
    this.setState({
      inputMessage: event.target.value
    })
  }

  addList = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      models: [
        {
          profileImg: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
          userName: '짱구',
          mainImg: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
          likeCount: 500,
          description: this.state.inputMessage,
          commentCount: 6
        },
        ...this.state.models
      ]
    })
  }

  cardElements = () =>
    this.state.models.map((model, index) => (
      <Card
        profileImg={model.profileImg}
        userName={model.userName}
        mainImg={model.mainImg}
        likeCount={model.likeCount}
        description={model.description}
        commentCount={model.commentCount}
        key={index}
      />
    ))

  render() {
    return (
      <div>
        <InputBox onSubmit={this.addList} onChange={this.changeMessage} />
        {this.cardElements()}
      </div>
    )
  }
}

export default Home
