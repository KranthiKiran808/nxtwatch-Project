import {MdHome} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {HiFire} from 'react-icons/hi'

import {SideIconContainer, SideContainer} from './styledComponent'

import './index.css'

const SideHeader = () => (
  <SideContainer>
    <div className="side-icon-bg-container">
      <SideIconContainer className="side-icon-container">
        <MdHome />
        <p>Home</p>
      </SideIconContainer>
      <SideIconContainer className="side-icon-container">
        <HiFire />
        <p>Trending</p>
      </SideIconContainer>
      <SideIconContainer className="side-icon-container">
        <SiYoutubegaming />
        <p>Gaming</p>
      </SideIconContainer>
      <SideIconContainer className="side-icon-container">
        <CgPlayListAdd />
        <p>Saved Videos</p>
      </SideIconContainer>
    </div>
    <div className="contact-us-container">
      <h3>CONTACT US</h3>
      <div className="face-twi-link-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </div>

      <p className="contact-us-para">
        Enjoy! Now to see your channels and recommendations!
      </p>
    </div>
  </SideContainer>
)

export default SideHeader
