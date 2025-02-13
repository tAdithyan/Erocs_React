import { GiPlayButton } from 'react-icons/gi'

const PlayButton = () => {
  return (
    <div className="absolute right-4 sm:right-16 md:right-3 xl:right-32 top-32 sm:top-36 md:top-44 flex items-center justify-center">
    <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-42 lg:h-42">
      <div className="absolute w-full h-full rounded-full border border-white/30"></div>
      <div className="absolute w-full h-full animate-spin-slow rounded-full p-2">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <path
            id="circularTextPath"
            fill="transparent"
            d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
          <text fontSize="10" className="sm:fontSize-12 md:fontSize-14" letterSpacing="2" fill="white">
            <textPath href="#circularTextPath" startOffset="0%">
              VIDEO - PLAY INTRO - VIDEO - PLAY INTRO -
            </textPath>
          </text>
        </svg>
      </div>
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <GiPlayButton className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </div>
    </div>
  </div>  )
}

export default PlayButton