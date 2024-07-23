import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import BackgroundColorContext from '../Context/BackgroundColorContext'
import {MainContainer} from '../Header/styledComponents'
import {LoginContainer, InputContainer} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeCheckbox = event =>
    this.setState({showPassword: event.target.checked})

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    // Handle failure (e.g., show an error message)
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure()
    }
    console.log(response, data)
  }

  render() {
    const {username, password, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {bgColor} = value
          const websitelogo = bgColor
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <MainContainer bgColor={bgColor} className="main-bg-container">
              <LoginContainer bgColor={bgColor} onSubmit={this.onSubmitForm}>
                <div className="website-logo">
                  <img src={websitelogo} alt="website logo" />
                </div>

                <div className="input-container">
                  <label htmlFor="username">USERNAME</label>
                  <InputContainer
                    bgColor={bgColor}
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password">PASSWORD</label>
                  <InputContainer
                    bgColor={bgColor}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </div>
                <div className="show-password">
                  <input
                    type="checkbox"
                    id="showpassword"
                    onChange={this.onChangeCheckbox}
                    checked={showPassword}
                  />
                  <label htmlFor="showpassword">Show Password</label>
                </div>
                <div>
                  <button type="submit" className="login-button">
                    Log in
                  </button>
                </div>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default Login
