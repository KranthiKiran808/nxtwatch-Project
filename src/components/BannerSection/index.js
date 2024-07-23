import './index.css'
import {FaTimes} from 'react-icons/fa'
import {Component} from 'react'

class BannerSection extends Component {
  state = {bannerSection: true}

  onClickFaCrossButton = () => {
    this.setState(prevState => ({bannerSection: !prevState.bannerSection}))
  }

  render() {
    const {bannerSection} = this.state
    return (
      <>
        {bannerSection && (
          <div className="banner-section">
            <div className="fa-cross-icon">
              <FaTimes onClick={this.onClickFaCrossButton} />
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            </div>
            <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
            <button type="button">GET IT NOW</button>
          </div>
        )}
      </>
    )
  }
}

export default BannerSection
