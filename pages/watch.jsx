import {useState, useRef} from 'react'
import Link from 'next/link';
import PageHeroBanner from '@/component/PageHeroBanner'
import ResourcesCard from '@/component/cards/ResourcesCard';
import YouTube from 'react-youtube';
import OutlineButtonBlack from '@/component/buttons/OutlineButtonBlack';

const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/playlistItems`;

export const getServerSideProps = async () => {
  let data = "";
  try {
     const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLyQjm_QBlexa_1YhZFIRAqJE4WlGZ5WvF&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
     if(res){
      data = await res.json();
     } 
  } catch(err) {
    console.log(err)
  }
 
  return {
    props: {
      data
    }
  }  
}

const watch = ({data}) => {
  const videoRef = useRef();
  // console.log('data--', data)
  const [youtubeID, setYoutubeID] = useState(null)
  const [showPlaylist, setShowPlaylist] = useState(false)

  return (
    <>
    <PageHeroBanner
      pageTitle='Watch >'
      heading='Join our services online'
      image={'worship.jpg'}
    />
      <div className="h-16" id="view"></div>
      <div className='w-full px-6 sm:px-16 lg:px-36 pt-16  pb-10'>
        <div className={!showPlaylist && `pb-60`}>
          <p>Our online service is not available now.</p>
          <p className="my-2">
            Stream from our recorded playlist of Success messages.
          </p>
          <div onClick={() => setShowPlaylist(!showPlaylist)}>
            <OutlineButtonBlack >
            {!showPlaylist ? `View Playlist` : `Remove Playlist` }
          </OutlineButtonBlack>
          </div>
        </div>
      </div>

      <div className=''>

        {showPlaylist && ( 
          <> 
            {/* Youtube video Card component */}
            <div ref={videoRef} className='w-full px-6 flex justify-center pb-10'>
              <div>
                {youtubeID && <div id='stream' className=' relative mt-10' >
                <YouTube videoId={youtubeID}  />
                <button onClick={() => setYoutubeID('')}
                className="absolute top-2 right-2 rounded-full px-2 py-1  bg-yellow-400 text-black font-semibold"> x
                </button>
              </div>}
            </div>
          
            </div>
            {/* playlist selection bar */}
            <div className='mb-6 w-full border-b  border-zinc-500'>
              <div className='px-6 sm:px-16 lg:px-36 flex w-full gap-0 overflow-auto scrollBar-hidden '>
                <div className='bg-zinc-300 border-r border-zinc-500 hover:bg-zinc-300 duration-500 cursor-pointer'>
                  <p className='p-4'>Success series</p>
                </div>
              </div>
            </div>

            {/* playlistItems */}
            <div id='playlist' className="w-full px-6 sm:px-16 lg:px-36 grid sm:grid-cols-2 md:gap-12 lg:gap-2 lg:grid-cols-4 items-center gap-6 py-16">

          {
            data ? data.items.map(({id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId} = snippet;
              const {medium = {}} = thumbnails;
              const videoUrl = `https://www.youtube.com/watch?v=${resourceId.videoId}`

              return(
                <div onClick={window.scrollTo(videoRef.current)}>
                  <div key={id} onClick={() => setYoutubeID(resourceId.videoId)}>
                  <ResourcesCard
                  title={title} link={''} cardImage={medium.url} 
                    />
                  </div>
                </div>
                
                
              )
            }) : <p>An error occured. Check your network connection</p>
          }
            </div> 
          </>
          )
        }
      </div>
      
    </>
  )
}

export default watch