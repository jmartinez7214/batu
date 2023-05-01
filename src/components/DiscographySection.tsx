import { useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

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
              imgUrl="/images/genesis.JPG"
            />
          </div>
          <div>
            <DiscographyCard
              title="Vol. 2 Cenizas Caidas"
              subTitle="Album"
              imgUrl="/images/cenizas_caidas.JPG"
            />
          </div>
          <div>
            <DiscographyCard
              title="Vol. 3 Corruptoria"
              subTitle="Album"
              imgUrl="/images/corruptoria.JPG"
            />
          </div>
          <div ref={ref}>
            <DiscographyCard
              title="Vol. 4 Toxicolandia"
              subTitle="Album"
              imgUrl="/images/toxicolandia.JPG"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="col-span-8 lg:col-start-2 lg:col-span-2">
            <DiscographyCard
              title="Cenizas del Genesis"
              subTitle="Album"
              imgUrl="/images/cenizas_del_genesis.JPG"
            />
          </div>
          <div className="col-span-8 lg:col-span-2">
            <DiscographyCard
              title="Toque de Quiebra"
              subTitle="Sencillo"
              imgUrl="/images/toque_de_quiebra.JPG"
            />
          </div>
          <div className="col-span-8 lg:col-span-2">
            <DiscographyCard
              title="Mono Mascara"
              subTitle="Sencillo"
              imgUrl="/images/mono_mascara.JPG"
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
