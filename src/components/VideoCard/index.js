import './index.css'
// import {Cookies} from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {VideoCardContainer} from './styledComponents'

const VideoCard = () => {
  //   const getVideoItemDetails = async () => {
  //     const jwtToken = Cookies.get('jwt_token')
  //     const options = {
  //       method: 'GET',
  //       Authorization: `Bearer ${jwtToken}`,
  //     }
  //     const response = await fetch('https://apis.ccbp.in/videos/all', options)
  //   }

  const onChangeSearchInput = () => {}
  return (
    <>
      <VideoCardContainer>
        <div>
          <input type="text" onChange={onChangeSearchInput} />
          <FaSearch />
        </div>
        {/* {getVideoItemDetails()} */}
      </VideoCardContainer>
    </>
  )
}

export default VideoCard
