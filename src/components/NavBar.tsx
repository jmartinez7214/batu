import { useState } from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { SocialMediaLinks } from './SocialMediaLinks'
import batuLogo from '../../public/images/logo-batu.png'

export default function NavBar(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false)

  const handleNav = (): void => {
    setNavOpen(!navOpen)
  }

  const handleClickScroll = (id: string): void => {
    const element = document.getElementById(id)
    if (element != null) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (navOpen) {
      setNavOpen(!navOpen)
    }
  }

  return (
    <div className="fixed w-full bg-black text-white">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 relative">
        <button
          onClick={() => {
            handleClickScroll('home')
          }}
        >
          <Image src={batuLogo} className="w-1/2" alt="Batu" />
        </button>

        <ul className="hidden md:flex">
          <li className="p-4 hover:text-neutral-300 transition duration-100">
            <button
              onClick={() => {
                handleClickScroll('discography')
              }}
            >
              Discografía
            </button>
          </li>
          <li className="p-4 hover:text-neutral-300 transition duration-100">
            <button
              onClick={() => {
                handleClickScroll('biography')
              }}
            >
              Biografía
            </button>
          </li>
          <li className="p-4 hover:text-neutral-300 transition duration-100">
            <button
              onClick={() => {
                handleClickScroll('footer')
              }}
            >
              Contacto
            </button>
          </li>
          <li className="pt-5">
            <SocialMediaLinks />
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={`md:hidden ${
            navOpen
              ? 'fixed top-0 left-0 w-2/4 h-full border-r bg-black border-r-white-900 ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }`}
        >
          <h1 className="w-full text-3xl font-bold p-4">
            <button
              onClick={() => {
                handleClickScroll('home')
              }}
            >
              <Image src={batuLogo} className="w-1/2" alt="Batu" />
            </button>
          </h1>
          <ul className="uppercase p-2">
            <li className="p-4 border-b border-gray-600">
              <button
                onClick={() => {
                  handleClickScroll('discography')
                }}
              >
                Discografía
              </button>
            </li>
            <li className="p-4 border-b border-gray-600">
              <button
                onClick={() => {
                  handleClickScroll('biography')
                }}
              >
                Biografía
              </button>
            </li>
            <li className="p-4 border-b border-gray-600">
              <button
                onClick={() => {
                  handleClickScroll('footer')
                }}
              >
                Contacto
              </button>
            </li>
            <li className="p-4">
              <SocialMediaLinks />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
