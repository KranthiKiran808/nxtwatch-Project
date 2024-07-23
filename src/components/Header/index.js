import './index.css'
import {FaMoon} from 'react-icons/fa'
import {CgSun} from 'react-icons/cg'
import BackgroundColorContext from '../Context/BackgroundColorContext'
import {Button} from './styledComponents'

const Header = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {bgColor, onChangeBgColor} = value
      const onClickBgColor = () => {
        onChangeBgColor()
      }
      const websiteLogo = bgColor
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <div className="header-container">
          <div className="websitelogo-container">
            <img src={websiteLogo} alt="website logo" />
          </div>
          <div className="user-details-container">
            <button
              type="button"
              aria-label="submit"
              onClick={onClickBgColor}
              className="bg-button"
            >
              {bgColor ? (
                <CgSun color={bgColor ? 'white' : 'black'} />
              ) : (
                <FaMoon color={bgColor ? 'white' : 'black'} />
              )}
            </button>

            <img
              className="profile-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Button bgColor={bgColor}>Logout</Button>
          </div>
        </div>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default Header
