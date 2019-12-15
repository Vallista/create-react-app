import React from 'react'
import axios from 'axios'

const dictionary = {
  'clear sky': '맑음',
  haze: '흐림'
}

class Home extends React.Component {
  state = {
    weather: {
      description: '',
      temp: '',
      temp_min: '',
      temp_max: ''
    }
  }

  componentDidMount() {
    // mount 되고 나서
    // Mount = 삽입하다, 넣다
    // 화면에 해당 컴포넌트의 Render안에 있는, 애들이 그려지고 나서 호출되는 라이프사이클
    const http = axios.create({
      baseURL: 'http://api.openweathermap.org/data/2.5'
    })

    http
      .get(`/weather?q=${encodeURIComponent('Seoul')}&appid=${encodeURIComponent('8d1ec898f40cd4ccdfd68aec10be083b')}`)
      .then((result) => {
        console.log(result)
        this.setState({
          weather: {
            description: dictionary[result.data.weather[0].description],
            temp: parseInt(result.data.main.temp, 10) - 273,
            temp_min: parseInt(result.data.main.temp_min, 10) - 273,
            temp_max: parseInt(result.data.main.temp_max, 10) - 273
          }
        })
      })
  }

  componentDidUpdate() {
    // Update 되고 나서
    // Update = 갱신되다
    // 이 컴포넌트의 변경사항이 있어, 변경이 되고 나서 호출된다.
    console.log('5')
  }

  componentWillMount() {
    // mount 되기 전에
    // 화면에 해당 컴포넌트의 Render함수가 실행되기 이전, 호출되는 친구
    console.log('1')
  }

  componentWillReceiveProps() {
    // Props 데이터를 받기 전에
    // Props를 받기 전에
    console.log('0')
  }

  componentWillUpdate() {
    // Update가 되기 전에
    console.log('2')
    // 업데이트가 되기 전에 호출
  }

  render() {
    console.log('3')
    console.log(this.state.weather)
    return (
      <div>
        <p>{this.state.weather.description}</p>
        <p>{this.state.weather.temp}</p>
        <p>{this.state.weather.temp_min}</p>
        <p>{this.state.weather.temp_max}</p>
      </div>
    )
  }
}

export default Home
