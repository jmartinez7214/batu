import { useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { BsSpotify, BsYoutube } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'
import { FaBandcamp, FaDeezer } from 'react-icons/fa'
import { AiOutlineAmazon } from 'react-icons/ai'

export const DiscographySection = (): JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="container mx-auto px-4 pt-16" id="discography">
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h2 className="text-5xl text-center mb-4">DISCOGRAFÍA</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-3">
          <div>
            <DiscographyCard
              title="Vol. 1 Génesis"
              subTitle="Álbum"
              imgUrl="/images/genesis.png"
              spotify="https://open.spotify.com/album/1qQnNys3XHj6H69wFULxLN?si=aV8Bl8tiQ8W296Xy-bA2Rg"
              youtube="https://www.youtube.com/watch?v=amQbzaVQFhk&list=OLAK5uy_mTwKmHNnlb2Sryo6ADz0Wl5eqvbP5Wpk8"
              apple="https://music.apple.com/do/album/vol-1-g%C3%A9nesis/1436940077"
              bandcamp="https://batu1.bandcamp.com/album/vol-1-genesis"
              deezer="https://deezer.page.link/eXLQCww5jbeGHX9d7"
              amazon="https://amazon.com/music/player/albums/B07HHGHPC1?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_0aaMLbM0w5IQ1SkpICPz6Qy70"
            />
          </div>
          <div>
            <DiscographyCard
              title="Vol. 2 Cenizas Caídas"
              subTitle="Álbum"
              imgUrl="/images/cenizas_caidas.jpg"
              spotify="https://open.spotify.com/album/5CTK9UDCwvgYwV8c1mXldR?si=THDKoZH1QvydvEmjdkai1w"
              youtube="https://www.youtube.com/watch?v=TfrGGAeOaTk&list=OLAK5uy_nUNdy03lWibdVl32dnPw4cPN06L3iJqxs"
              apple="https://music.apple.com/do/album/batu-vol-2-cenizas-caidas/1490222270"
              bandcamp="https://batu1.bandcamp.com/album/vol-2-cenizas-caidas"
              deezer="https://deezer.page.link/JeCVB4KN9KraQiFr7"
              amazon="https://amazon.com/music/player/albums/B082BC2HW5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NwBNrAy1haROZgPuw9yVUhlp1"
            />
          </div>
          <div>
            <DiscographyCard
              title="Vol. 3 Corruptopía"
              subTitle="Álbum"
              imgUrl="/images/corruptoria.jpg"
              spotify="https://open.spotify.com/album/0AJzZhg3d6ICB0IzQOU3QF?si=K6LiHyetSHqmmnRBzIDLWw"
              youtube="https://www.youtube.com/watch?v=Y-BXjdHg36o&list=OLAK5uy_k50Be-5zUYGHGrSbQ7M27DrZHVL2TIQ5g"
              apple="https://music.apple.com/do/album/vol-3-corruptop%C3%ADa/1543582328"
              bandcamp="https://batu1.bandcamp.com/album/vol-3-corruptop-a"
              deezer="https://deezer.page.link/wTr1vev8SasKfv5YA"
              amazon="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
            />
          </div>
          <div ref={ref}>
            <DiscographyCard
              title="Vol. 4 Tóxicolandia"
              subTitle="Álbum"
              imgUrl="/images/toxicolandia.jpg"
              spotify="https://open.spotify.com/album/3ql3RwLMpX9jvDl9IoUNtA?si=S9OX0eOURMGvueDzQ-Mbbw"
              youtube="https://www.youtube.com/watch?v=EpK6VTvte_I&list=OLAK5uy_lko57HDZhwL9dPu9EOVyXAilFJLfeAt3Y"
              apple="https://music.apple.com/do/album/vol-4-toxicolandia/1581912569"
              bandcamp="https://batu1.bandcamp.com/album/vol-4-toxicolandia"
              deezer="https://deezer.page.link/7QAq62WnLaE6dUDr6"
              amazon="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          <div className="col-span-8 lg:col-span-2 xl:col-start-2 xl:col-span-2">
            <DiscographyCard
              title="Toque de Quiebra"
              subTitle="Sencillo"
              imgUrl="/images/toque_de_quiebra.jpg"
              spotify="https://open.spotify.com/album/21ssZkyHEOAj6yEoxr6OJE?si=Z6_6Ph5JSo2EbcI9AGACpw"
              youtube="https://www.youtube.com/watch?v=AN3qD07Cz8A&list=OLAK5uy_nNE9RCaTCvz2k3gPb4qi4VopKP0s-foZY"
              apple="https://music.apple.com/do/album/toque-de-quiebra-single/1550848282"
              bandcamp="https://batu1.bandcamp.com/track/toque-de-quiebra"
              deezer="https://deezer.page.link/B37RmCmN92Ey4FaH6"
              amazon="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
            />
          </div>
          <div className="col-span-8 lg:col-span-2">
            <DiscographyCard
              title="Mono Máscara"
              subTitle="Sencillo"
              imgUrl="/images/mono_mascara.jpg"
              spotify="https://open.spotify.com/album/0u1Uuynhn6S3t0MmoOrPf3?si=IrsxYsqsS0Su0g5BYwtl8Q"
              youtube="https://www.youtube.com/watch?v=QKTv6MQX58I&list=OLAK5uy_nfSAMuzQU-yOAEkQZpKJ6808NODAkLPKM"
              apple="https://music.apple.com/do/album/mono-m%C3%A1scara-single/1557587544"
              bandcamp="https://batu1.bandcamp.com/track/mono-m-scara"
              deezer="https://deezer.page.link/YZf3R9qeQ3gjNwZq5"
              amazon="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
            />
          </div>
          <div className="col-span-8 lg:col-start-2 xl:col-start-auto lg:col-span-2">
            <DiscographyCard
              title="Cenizas del Génesis"
              subTitle="Álbum"
              imgUrl="/images/cenizas_del_genesis.jpg"
              spotify="https://open.spotify.com/album/44qHsGroOxtt1CSBSemFst?si=iiWPzmR6QPSu4VRs20RRhg"
              youtube="https://www.youtube.com/watch?v=PVkkhHMVjAQ&list=OLAK5uy_k4tL6lEjFCHQ9dKn-qLqG3lv43y1G2i_0"
              apple="https://music.apple.com/do/album/cenizas-del-g%C3%A9nesis/1629748514"
              bandcamp="https://batu1.bandcamp.com/album/cenizas-del-g-nesis"
              deezer="https://deezer.page.link/Dp6XayZdDxzK3Unx9"
              amazon="https://www.amazon.com/music/player/artists/B08KVRL51Y/batu"
            />
          </div>
        </div>
      </span>
    </div>
  )
}

interface DiscographyData {
  title: string
  subTitle: string
  imgUrl: string
  spotify: string
  youtube: string
  apple: string
  bandcamp: string
  deezer: string
  amazon: string
}

const DiscographyCard = ({
  title,
  subTitle,
  imgUrl,
  spotify,
  youtube,
  apple,
  bandcamp,
  deezer,
  amazon,
}: DiscographyData): JSX.Element => {
  return (
    <div className="flex w-full h-28 shadow-md border border-gray-600 rounded-lg p-2">
      <Image src={imgUrl} alt={title} width={100} height={100} />
      <div className="pl-2 w-full">
        <h3 className="text-xl">{title}</h3>
        <h4>({subTitle})</h4>

        <div className="flex gap-2 justify-end items-end pt-6">
          <a
            className="hover:text-neutral-300 transition duration-100"
            href={spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsSpotify />
          </a>
          <a
            className="hover:text-neutral-300 transition duration-100"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube />
          </a>
          <a
            className="hover:text-neutral-300 transition duration-100"
            href={apple}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiApplemusic />
          </a>
          <a
            className="hover:text-neutral-300 transition duration-100"
            href={bandcamp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBandcamp />
          </a>
          <a
            className="hover:text-neutral-300 transition duration-100"
            href={deezer}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDeezer />
          </a>
          <a
            className="hover:text-neutral-300 transition duration-100"
            href={amazon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineAmazon />
          </a>
        </div>
      </div>
    </div>
  )
}
