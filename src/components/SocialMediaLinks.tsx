import { BsSpotify, BsYoutube, BsFacebook } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'
import { FaBandcamp, FaDeezer } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineAmazon } from 'react-icons/ai'

export const SocialMediaLinks = (): JSX.Element => {
  return (
    <div className="flex gap-2 justify-center">
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://open.spotify.com/artist/6sacdkOsX4jeJ0VLMnism9?si=pCb0s5mwTGKDpoSWb3Q-7w"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsSpotify />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://www.youtube.com/@batu_oficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsYoutube />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://music.apple.com/do/artist/batu/1436796986"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiApplemusic />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://batu1.bandcamp.com/music"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBandcamp />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://www.deezer.com/us/artist/71226732"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDeezer />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://www.facebook.com/BATUmusica/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://www.instagram.com/batu_oficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram />
      </a>
      <a
        className="hover:text-neutral-300 transition duration-100"
        href="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineAmazon />
      </a>
    </div>
  )
}
