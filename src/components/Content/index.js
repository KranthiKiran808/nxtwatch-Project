import './index.css'
import BackgroundColorContext from '../Context/BackgroundColorContext'
import {ContentContainer} from './styledComponents'
import BannerSection from '../BannerSection'
import VideoCard from '../VideoCard'

const Content = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {bgColor} = value

      return (
        <ContentContainer bgColor={bgColor}>
          <BannerSection />
          <VideoCard />
        </ContentContainer>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default Content
