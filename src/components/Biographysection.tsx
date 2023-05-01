import { useRef } from 'react'
import Image from 'next/image'
import batuImage from '../../public/images/batu.jpg'
import { useInView } from 'framer-motion'

export const Biographysection = (): JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="container mx-auto px-4 pt-16" id="biography">
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h2 className="text-5xl text-center mb-4">BIOGRAFIA</h2>

        <div className="text-justify">
          <Image
            src={batuImage}
            className="w-full lg:w-1/2 float-left rounded-lg mr-2 mb-2"
            alt="Batu"
          />
          <p>
            Batu es una banda de metal experimental, creada a finales del 2014,
            por su guitarrista y compositor principal Evin Contreras. Tiempo
            después se unió su co-fundador y bajista Alexander Mateo. Luego de
            años de arduo trabajo, Batu alza vuelo con una lineación estable a
            finales del 2017.
          </p>
          <p>
            Las influencias de Batu son muy diversas, cruzando por todos los
            géneros extremos del metal conocido hasta ritmos latinos.
          </p>
          <p ref={ref}>
            El 10 de julio del 2018, la banda finalmente publica su 1er EP
            llamado: &quot;Vol.1 Génesis&quot;, el cual recibió muy buenas
            críticas de parte de los oyentes.
          </p>
          <p>
            El 1 de septiembre de 2018, Batu se presenta por primera vez en
            vivo, abriéndoles el concierto a Múcaro &amp; Medulah, dos grandes
            bandas de la escena metalera dominicana.
          </p>
          <p>
            El 19 de octubre de 2019, participan en el evento Rockalloween,
            realizado en La Espiral 313, siendo teloneros de la banda
            internacional Cavilar Rock Band.
          </p>
          <p>
            En diciembre 11 de 2019, lanzan su tan esperado &quot;Vol.2 Cenizas
            Caídas&quot;, que al igual que su &quot;Vol.1 Génesis&quot; están
            disponibles en todas sus plataformas oficiales.
          </p>
          <p>
            El 21 de diciembre de 2019, participaron en el Destrucción Masiva,
            el festival más grande de Rock &amp; Metal de República
            Dominicana.Posteriormente, fueron una de las bandaa elegidas para
            participar en el Tripletazo Diabólico, realizado en el Portal de la
            Zona Colonial, el 27 de diciembre del 2019.
          </p>
          <p>
            En el 2020, Batu resurgió con dos cambios notables: una nueva
            lineación de miembros en su banda, presentando a Evin Contreras como
            el frontman de la misma; y Alexander Mateo como segunda voz, así
            Batu también ha presentado un nuevo sonido, con su tercera
            producción, el &quot;Vol.3 Corruptopia&quot;, una historia sobre las
            vicisitudes y carencias de la clase media baja de América Latina
            (2020).
          </p>
          <p>
            Dos sencillos de protesta social han marcado la historia de Batu,
            Toque de quiebra fue el primero que despertó la banda junto a sus
            fanaticos en plena pandemia y en segundo lugar, pero primero en el
            gusto de los fans de la escena metalera fue Mono Mascara, un tema
            inspirado en el asesinato de un civil por éste no llevar la
            mascarilla puesta.
          </p>
          <p>
            Vol.4 Toxicolandia la banda siguió retomando los temas de protesta
            social y fue, además, una catarxis que de la banda ante todas las
            críticas destructivas que recibieron por años.
          </p>
          <p>
            Cenizas del Génesis es su última producción hasta la fecha,
            recopilada de sus temas en vivo, en ella Batu resurge con nuevos
            arreglos en algunos de sus temas.
          </p>
        </div>
      </span>
    </div>
  )
}
