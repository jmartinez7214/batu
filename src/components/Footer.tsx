import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = (): JSX.Element => {
  return (
    <div
      className="w-full grid grid-cols-1 lg:grid-cols-3 text-center items-center mt-10 md:mt-20 px-30 md:px-40 py-10 md:py-10 border-t border-t-gray-600"
      id="footer"
    >
      <div className="mb-4 lg:mb-0">
        <h3 className="text-lg font-bold">
          Copyright © Batu {new Date().getFullYear()}
        </h3>
      </div>
      <div className="mb-4 lg:mb-0">
        <label className="block text-lg font-bold">Contacto:</label>
        <label className="text-md font-semibold">
          batuofficialband@gmail.com
        </label>
      </div>
      <div>
        <label className="block text-lg font-bold">Redes Sociales</label>
        <SocialMediaLinks />
      </div>
    </div>
  )
}
