import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import BackgroundColorContext from './components/Context/BackgroundColorContext'

class App extends Component {
  constructor(props) {
    super(props)
    const savedBgColor = localStorage.getItem('bgColor')
    this.state = {bgColor: savedBgColor === 'true'}
  }

  onChangeBgColor = () => {
    this.setState(prevState => {
      const newBgColor = !prevState.bgColor
      localStorage.setItem('bgColor', newBgColor)
      return {bgColor: newBgColor}
    })
  }

  render() {
    const {bgColor} = this.state
    return (
      <BackgroundColorContext.Provider
        value={{bgColor, onChangeBgColor: this.onChangeBgColor}}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </BackgroundColorContext.Provider>
    )
  }
}

export default App
