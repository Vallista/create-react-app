import React from 'react'
import {
  // spread object
  HashRouter as Router, // React Router Dom 안에 있는 Hash Router를 이 파일에서는 Router 라는 이름으로 사용하겠다.
  Switch,
  Route
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import './App.css'

import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className='switch-wrapper'
      >
        {/* 동적 라우팅 */}
        <Route path='/detail/:id' component={Detail} exact />
        {/* 정적 라우팅 */}
        <Route path='/' component={Home} exact />
      </AnimatedSwitch>
    </Router>
  )
}

export default App
