import Image from 'next/image'
import Logo from '../../../public/Header Logo All pages/Logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-7 py-4 border border-b-black items-center'>
      <Image src={Logo} height={36} alt='codegenix-company-logo' />

      <ul className='hidden md:flex space-x-4'>
        <Link href={'/'}>
          <li className='text-md text-gray-900 hover:text-gray-500'>Home</li>
        </Link>

        <Link href={'/services'}>
          <li className='text-md text-gray-900 hover:text-gray-500'>
            Services
          </li>
        </Link>

        <Link href={'/about'}>
          <li className='text-md text-gray-900 hover:text-gray-500'>
            About us
          </li>
        </Link>

        <Link href={'/portfolio'}>
          <li className='text-md text-gray-900 hover:text-gray-500'>
            Portfolio
          </li>
        </Link>

        <Link href={'/blog'}>
          <li className='text-md text-gray-900 hover:text-gray-500'>Blog</li>
        </Link>
      </ul>

      <button className='bg-primary-green px-4 py-2 border border-black'>
        Menu
      </button>
    </nav>
  )
}

export default Navbar
