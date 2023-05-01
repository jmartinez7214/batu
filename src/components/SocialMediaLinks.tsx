import { BsSpotify, BsYoutube, BsFacebook } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'
import { FaBandcamp, FaDeezer } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineAmazon } from 'react-icons/ai'

export const SocialMediaLinks = (): JSX.Element => {
  return (
    <div className="flex gap-2 justify-center">
      <a
        href="https://open.spotify.com/?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsSpotify />
      </a>
      <a
        href="https://www.youtube.com/@batu_oficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsYoutube />
      </a>
      <a
        href="https://music.apple.com/us/artist/batu/1436796986?l=vi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiApplemusic />
      </a>
      <a
        href="https://batu1.bandcamp.com/album/cenizas-del-g-nesis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBandcamp />
      </a>
      <a
        href="https://www.deezer.com/us/artist/71226732"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDeezer />
      </a>
      <a
        href="https://www.facebook.com/BATUmusica/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        href="https://www.instagram.com/batu_oficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineAmazon />
      </a>
    </div>
  )
}
