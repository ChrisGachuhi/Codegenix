import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../public/Footer Desktop All pages/Company Logo small.png'
import largeLogo from '../../../public/Footer Desktop All pages/logo home page bottom.png'
import locationIcon from '../../../public/Footer Mobile All pages/Contact details Phone/location Frame.png'
import emailIcon from '../../../public/Footer Mobile All pages/Contact details Phone/emails Frame.png'
import phoneIcon from '../../../public/Footer Mobile All pages/Contact details Phone/phone-call Frame.png'
import facebookIcon from '../../../public/Footer Mobile All pages/Contact details Phone/facebook Frame.png'
import instagramIcon from '../../../public/Footer Mobile All pages/Contact details Phone/instagram Frame.png'
import linkedinIcon from '../../../public/Footer Mobile All pages/Contact details Phone/linkedin Frame.png'
import mobileBackground from '../../../public/Footer Mobile All pages/Background Image.jpg'
import desktopBackground from '../../../public/Footer Desktop All pages/Background Image.jpg'

const Footer = () => {
  return (
    <footer className='text-white relative'>
      <Image
        src={mobileBackground}
        alt=''
        className='md:hidden w-full h-full absolute'
      />
      <Image
        src={desktopBackground}
        alt=''
        className='hidden md:block w-full h-full absolute background'
      />

      <div className='md:p-6 md:flex md:justify-between md:items-center relative'>
        <div className='p-6'>
          <Image src={Logo} alt='codegenix-company-logo' />
          <ul className='md:flex flex-row space-x-6 mt-8'>
            <Link href={'/'}>
              <li className='text-md '>Home</li>
            </Link>

            <Link href={'/services'}>
              <li className='text-md '>Services</li>
            </Link>

            <Link href={'/about'}>
              <li className='text-md '>About us</li>
            </Link>

            <Link href={'/portfolio'}>
              <li className='text-md '>Portfolio</li>
            </Link>

            <Link href={'/blog'}>
              <li className='text-md '>Blog</li>
            </Link>
          </ul>
        </div>

        <div className='mx-auto md:mx-0 p-6 flex flex-col space-y-4'>
          <label htmlFor='subscription'>Join</label>
          <span className='flex space-y-4 flex-col md:flex-row md:space-x-4 md:space-y-0'>
            <input type='email' required className='p-3 rounded' />
            <button className='bg-primary-green text-black py-3 px-4 rounded'>
              Subscribe
            </button>
          </span>
          <span className='text-primary-green underline text-sm'>
            By subscribing, you agree to our Privacy Policy.
          </span>
        </div>
      </div>

      <Image
        src={largeLogo}
        alt='codegenix-company-logo'
        className='mx-auto my-10 relative'
      />

      <div className='p-6 md:flex md:justify-between relative'>
        <div className='md:flex space-y-4 md:space-x-6 md:space-y-0'>
          <span className='flex items-center gap-4'>
            <Image src={locationIcon} alt='codegenix-location-icon' />
            Westlands Business Park, <br /> Chiromo lane, Westlands
          </span>
          <span className='flex items-center gap-4'>
            <Image src={emailIcon} alt='codegenix-location-icon' />
            info@codegenix.co.ke
          </span>
          <span className='flex items-center gap-4'>
            <Image src={phoneIcon} alt='codegenix-location-icon' />
            +254718729487
          </span>
        </div>

        <span className='mt-4 md:mt-0 flex items-center gap-8'>
          <Link href={'www.facebook.com/codegenix'}>
            <Image src={facebookIcon} alt='codegenix-facebook-icon' />
          </Link>
          <Link href={'www.instagram.com/codegenix'}>
            <Image src={instagramIcon} alt='codegenix-instagram-icon' />
          </Link>
          <Link href={'www.linkedin.com/codegenix'}>
            <Image src={linkedinIcon} alt='codegenix-linkedin-icon' />
          </Link>
        </span>
      </div>

      <div className='p-6 md:flex md:justify-between relative'>
        <div className='flex flex-col mb-6 md:mb-0 md:flex-row space-y-4 md:space-x-6 md:space-y-0'>
          <Link
            href={'www.privacypolicy'}
            className='text-primary-green underline'>
            Privacy Policy
          </Link>
          <Link
            href={'www.privacypolicy'}
            className='text-primary-green underline'>
            Terms of service
          </Link>
          <Link
            href={'www.privacypolicy'}
            className='text-primary-green underline'>
            Cookie policy
          </Link>
        </div>

        <span className='text-center'>
          &copy; Codegenix {new Date().getFullYear()}. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
