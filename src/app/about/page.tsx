import Link from 'next/link'
import Image from 'next/image'

import aboutHeroDesktop from '../../../public/Assets/About Us/Empowering businesses desktop/Image.png'
import aboutHeroMobile from '../../../public/Assets/About Us/Empowering businesses mobile/Image.png'

import whoWeAre from '../../../public/Assets/About Us/Who we are desktop/image.png'

import passionIcon from '../../../public/Assets/About Us/What drives us desktop/passion icon.png'
import innovationIcon from '../../../public/Assets/About Us/What drives us desktop/innovation icon.png'
import resultsIcon from '../../../public/Assets/About Us/What drives us desktop/results icon.png'

const page = () => {
  return (
    <main>
      {/* Hero */}
      <section className='p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row-reverse'>
        <div className='p-4 space-y-4 text-center md:text-left md:p-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Empowering Businesses with Digital Excellence
          </h1>

          <p className='text-sm font-light'>
            We design, develop, and market digital solutions to help brands grow
            and thrive online.
          </p>

          <Link href={'/contact'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              Let&apos;s work together
            </button>
          </Link>
        </div>

        <div className='p-4'>
          <Image
            src={aboutHeroDesktop}
            alt='codegenix-background-webdevelopment'
            className='hidden md:block'
          />
          <Image
            src={aboutHeroMobile}
            alt='codegenix-background-webdevelopment'
            className='md:hidden'
          />
        </div>
      </section>

      {/* Who we are */}
      <section className='p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row-reverse'>
        <div className='p-4'>
          <Image
            src={whoWeAre}
            alt='codegenix-background-webdevelopment'
            className='hidden md:block'
          />
        </div>

        <div className='p-4 space-y-4 text-center md:text-left md:p-6'>
          <h2 className='text-4xl md:text-5xl font-bold'>Who We Are </h2>

          <p className='text-sm font-light'>
            At Codegenix, we started with one goal—to help businesses harness
            digital power. Today, we craft websites, mobile apps, and marketing
            strategies that drive real impact.
          </p>
        </div>
      </section>

      {/* What drives us */}
      <section className='p-6'>
        <div className='p-4 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-6 text-center capitalize'>
            What drives us?
          </h2>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={passionIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>Passion</h3>
              <p>We love building creative digital solutions</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={innovationIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>Innovation</h3>
              <p>We stay ahead of trends for maximum impact</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={resultsIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>Results-Driven</h3>
              <p>Every project is backed by strategy and data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Team */}
      <section className='p-6'>
        <div className='p-4 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-6 text-center capitalize'>
            Meet our Team
          </h2>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={passionIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>Chris John</h3>
              <p> CEO & Lead Strategist</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={passionIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>Brian Obuya </h3>
              <p>UI/UX Designer</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={passionIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>Gabriel John</h3>
              <p>Senior IOS engineer </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={passionIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>Shammah </h3>
              <p>Devops Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='bg-ctaMobileAbout md:bg-ctaDesktopAbout bg-cover bg-no-repeat w-full p-6'>
        <div className='p-6 text-center w-fit md:text-left md:w-1/2 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Partnerships & Certifications
          </h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            We work with global brands to deliver cutting-edge digital
            solutions. Ready to partner with us?
          </p>
          <Link href={'/contact'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2'>
              Want to collaborate? Let&apos;s connect!
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default page
