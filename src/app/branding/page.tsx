import Image from 'next/image'
import Link from 'next/link'

import brandingHero from '../../../public/Assets/Branding services/Craft a unique brand desktop/Image.jpg'
import motionIcon from '../../../public/Assets/Branding services/What we offer desktop/Motion graphics icon.png'
import logoIcon from '../../../public/Assets/Branding services/What we offer desktop/Logo design icon.png'
import materialsIcon from '../../../public/Assets/Branding services/What we offer desktop/Marketing materials icon.png'
import corporateIcon from '../../../public/Assets/Branding services/What we offer desktop/Corporate branding icon.png'

import consistencyIcon from '../../../public/Assets/Branding services/Why choose us desktop/Consistency icon.png'
import creativeIcon from '../../../public/Assets/Branding services/Why choose us desktop/Creative icon.png'
import speedIcon from '../../../public/Assets/Branding services/Why choose us desktop/Fast turn-around icon.png'
import expertsIcon from '../../../public/Assets/Branding services/Why choose us desktop/Experts icon.png'

const Branding = () => {
  return (
    <main>
      {/* hero */}
      <section className='p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row'>
        <div className='p-4'>
          <Image
            src={brandingHero}
            alt='codegenix-background-webdevelopment'
            className='rounded-lg w-full'
          />
        </div>

        <div className='p-4 md:p-6 text-right'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Craft a Unique Brand Identity That Stands Out
          </h1>

          <p className='text-sm font-light'>
            From logos to full-scale corporate branding, we design visuals that
            leave a lasting impact
          </p>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              See our Work
            </button>
          </Link>
        </div>
      </section>

      {/* What we offer */}
      <section className='p-6'>
        <div className='mx-auto p-4 flex flex-col items-center justify-center gap-4'>
          <h2 className='text-3xl font-semibold mt-6 text-center'>
            What We Offer
          </h2>

          <div className='my-4 grid md:grid-cols-2 gap-6 md:gap-6 w-full md:w-2/3'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image
                src={logoIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold my-2 text-md'>
                SEO & Ad-Ready Websites
              </h3>
              <ul className='space-y-2 mt-2'>
                <li>Rank higher & Drive organic traffic</li>

                <li>Get better results from Google & Meta Ads</li>

                <li>Engaging user friendly experience</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image
                src={motionIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold my-2 text-md'>
                SEO & Ad-Ready Websites
              </h3>
              <ul className='space-y-2 mt-2'>
                <li>Rank higher & Drive organic traffic</li>

                <li>Get better results from Google & Meta Ads</li>

                <li>Engaging user friendly experience</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image
                src={materialsIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold my-2 text-md'>
                SEO & Ad-Ready Websites
              </h3>
              <ul className='space-y-2 mt-2'>
                <li>Rank higher & Drive organic traffic</li>

                <li>Get better results from Google & Meta Ads</li>

                <li>Engaging user friendly experience</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image
                src={corporateIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold my-2 text-md'>
                SEO & Ad-Ready Websites
              </h3>
              <ul className='space-y-2 mt-2'>
                <li>Rank higher & Drive organic traffic</li>

                <li>Get better results from Google & Meta Ads</li>

                <li>Engaging user friendly experience</li>
              </ul>
            </div>
          </div>

          <Link href={'/contact'}>
            <button className='bg-primary-green mb-6 text-black rounded-tl-lg rounded-br-lg border border-black px-4 py-1'>
              Let&apos;s Elevate Your Brand
            </button>
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className='p-6'>
        <div className='p-4 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-6 text-center'>
            Why Choose Us
          </h2>

          <p className='text-lg text-gray-400 text-center'>
            We don&apos;t just build - we optimize, scale and elevate your
            digital presence
          </p>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={creativeIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>
                SEO & Ad-Ready Websites
              </h3>
              <p>
                We create high-performance websites that rank well and convert
                visitors
              </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={consistencyIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>
                End-to-End Digital Solutions
              </h3>
              <p>From development to marketing, we provide a full package</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={speedIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>
                Expert-Team with Proven Results
              </h3>
              <p>
                Backed by industry professionals and successful case studies
              </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={expertsIcon}
                alt='value-icon'
                className='mb-3'
                height={100}
              />
              <h3 className='font-semibold text-xl mb-2'>
                Growth-Focused Strategy
              </h3>
              <p>More than just a website, we help you scale your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='bg-ctaMobileBranding md:bg-ctaDesktopBranding bg-cover bg-no-repeat w-full p-6'>
        <div className='mx-auto p-6 text-center w-fit space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Need a Unique Brand Identity?
          </h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            Get a Free Branding Consultation!
          </p>
          <Link href={'/contact'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2'>
              Let&apos;s Talk!
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Branding
