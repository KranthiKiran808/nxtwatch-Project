import './index.css'
import Header from '../Header/index'
import MainContainer from './styledComponents'
import BackgroundColorContext from '../Context/BackgroundColorContext'
import Content from '../Content'
import SideHeader from '../SideHeader'

const Home = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {bgColor} = value
      return (
        <MainContainer bgColor={bgColor}>
          <Header />
          <div className="bottom-section">
            <SideHeader />
            <Content />
          </div>
        </MainContainer>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default Home
