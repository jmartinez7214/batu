import { useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { useInView } from 'framer-motion'
import genesis from '../../public/images/genesis.jpg'
import cenizas_caidas from '../../public/images/cenizas_caidas.jpg'
import corruptoria from '../../public/images/corruptoria.jpg'
import toxicolandia from '../../public/images/toxicolandia.jpg'
import cenizas_del_genesis from '../../public/images/cenizas_del_genesis.jpg'
import toque_de_quiebra from '../../public/images/toque_de_quiebra.jpg'
import mono_mascara from '../../public/images/mono_mascara.jpg'

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
        <h2 className="text-5xl text-center mb-4">DISCOGRAFIA</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-3">
          <div>
            <DiscographyCard
              title="Vol. 1 Genesis"
              subTitle="Album"
              imgUrl={genesis}
            />
          </div>
          <div>
            <DiscographyCard
              title="Vol. 2 Cenizas Caidas"
              subTitle="Album"
              imgUrl={cenizas_caidas}
            />
          </div>
          <div>
            <DiscographyCard
              title="Vol. 3 Corruptoria"
              subTitle="Album"
              imgUrl={corruptoria}
            />
          </div>
          <div ref={ref}>
            <DiscographyCard
              title="Vol. 4 Toxicolandia"
              subTitle="Album"
              imgUrl={toxicolandia}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="col-span-8 lg:col-start-2 lg:col-span-2">
            <DiscographyCard
              title="Cenizas del Genesis"
              subTitle="Album"
              imgUrl={cenizas_del_genesis}
            />
          </div>
          <div className="col-span-8 lg:col-span-2">
            <DiscographyCard
              title="Toque de Quiebra"
              subTitle="Sencillo"
              imgUrl={toque_de_quiebra}
            />
          </div>
          <div className="col-span-8 lg:col-span-2">
            <DiscographyCard
              title="Mono Mascara"
              subTitle="Sencillo"
              imgUrl={mono_mascara}
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
  imgUrl: StaticImageData
}

const DiscographyCard = ({
  title,
  subTitle,
  imgUrl,
}: DiscographyData): JSX.Element => {
  return (
    <div className="flex w-full h-28 shadow-md border border-gray-600 rounded-lg p-2">
      <Image src={imgUrl} alt={title} width={100} height={100} />
      <div className="pl-2">
        <h3 className="text-xl">{title}</h3>
        <h4>({subTitle})</h4>
      </div>
    </div>
  )
}
