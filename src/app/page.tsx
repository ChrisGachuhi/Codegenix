import Image from 'next/image'
import logoMobile from '../../public/Homepage/Landingpagemobile/vertical logo.png'
import logoDesktop from '../../public/Homepage/Landingpagedesktop/homepage logo new.png'

import webIcon from '../../public/Homepage/What we do Desktop/Web apps icon.png'
import trainingIcon from '../../public/Homepage/What we do Desktop/Training & Workshop Icon.png'
import marketingIcon from '../../public/Homepage/What we do Desktop/Digital Marketing icon.png'
import brandingIcon from '../../public/Homepage/What we do Desktop/Design & Branding icon.png'

import digitalIcon from '../../public/Homepage/Why Choose Us Desktop/Digital Marketing.png'
import mobileAppsIcon from '../../public/Homepage/Why Choose Us Desktop/Mobile apps.png'
import campaignIcon from '../../public/Homepage/Why Choose Us Desktop/Socia_ Media Campaign.png'
import webAppsIcon from '../../public/Homepage/Why Choose Us Desktop/Web apps.png'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* hero */}
      <section className='bg-herohomedesktop bg-no-repeat bg-cover w-full flex flex-col justify-center items-center p-6'>
        <div className='mx-auto flex flex-col items-center p-2'>
          <Image
            src={logoMobile}
            alt='codegenix-hero-page'
            // height={180}
            className='md:hidden mx-auto my-8 w-full'
          />

          <Image
            src={logoDesktop}
            alt='codegenix-hero-page'
            height={160}
            className='hidden md:block mx-auto my-8 '
          />

          <div className=''>
            <h1 className='text-3xl font-bold'>
              We Build Market & Scale <br /> Your Digital Experience
            </h1>

            <p className='text-xl my-6'>
              From SEO-ready websites to powerful social media marketing, <br />
              we help businesses grow
            </p>

            <Link href={'/contact'}>
              <button className='bg-primary-green px-6 py-2 border border-black'>
                Get started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* services highlight */}
      <section className='bg-serviceshighlightmobile md:bg-serviceshighlightdesktop bg-no-repeat bg-cover w-full p-6'>
        <div className=' p-6'>
          <h2 className='text-3xl font-semibold mt-6'>What We Do Best</h2>
          <p className='text-lg text-gray-400'>
            Comprehensive digital solutions to grow your business
          </p>

          <div className='container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4'>
            <div className='flex flex-col px-4 py-8 justify-around items-center space-y-3 md:space-y-0 border rounded-lg shadow-md shadow-primary-green'>
              <Image src={webIcon} alt='service-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                Web & App Development
              </h3>
              <p>
                Custom, SEO Friendly websites and Mobile Apps tailored to your
                business needs
              </p>
              <Link href={'/webdevelopment'}>
                <button className='bg-black text-primary-green rounded-full px-4 py-0.5'>
                  See more
                </button>
              </Link>
            </div>

            <div className='flex flex-col px-4 py-8 justify-around items-center space-y-3 md:space-y-0 border rounded-lg shadow-md shadow-primary-green'>
              <Image src={marketingIcon} alt='service-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>Digital Marketing</h3>
              <p>
                Boost your brand&apos;s visibility with Social Media Management,
                Search Engine Optimization & paid Ads
              </p>
              <Link href={'/marketing'}>
                <button className='bg-black text-primary-green rounded-full px-4 py-0.5'>
                  See more
                </button>
              </Link>
            </div>

            <div className='flex flex-col px-4 py-8 justify-around items-center space-y-3 md:space-y-0 border rounded-lg shadow-md shadow-primary-green'>
              <Image src={brandingIcon} alt='service-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>Design & Branding</h3>
              <p>
                From logo creation to full brand identity, we help you stand out
              </p>
              <Link href={'/branding'}>
                <button className='bg-black text-primary-green rounded-full px-4 py-0.5'>
                  See more
                </button>
              </Link>
            </div>

            <div className='flex flex-col px-4 py-8 justify-around items-center space-y-3 md:space-y-0 border rounded-lg shadow-md shadow-primary-green'>
              <Image src={trainingIcon} alt='service-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                Training & Workshops
              </h3>
              <p>
                Master web development, digital marketing and branding with
                expert-led training
              </p>
              <Link href={'/training'}>
                <button className='bg-black text-primary-green rounded-full px-4 py-0.5'>
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className='p-6'>
        <div className='p-6 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-6 text-center'>
            Why Choose Us
          </h2>

          <p className='text-lg text-gray-400 text-center'>
            We don&apos;t just build - we optimize, scale and elevate your
            digital presence
          </p>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                SEO & Ad-Ready Websites
              </h3>
              <p>
                We create high-performance websites that rank well and convert
                visitors
              </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={mobileAppsIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                End-to-End Digital Solutions
              </h3>
              <p>From development to marketing, we provide a full package</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={webAppsIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                Expert-Team with Proven Results
              </h3>
              <p>
                Backed by industry professionals and successful case studies
              </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={digitalIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                Growth-Focused Strategy
              </h3>
              <p>More than just a website, we help you scale your business</p>
            </div>
          </div>

          <Link href={'/contact'}>
            <button className='bg-primary-green mb-6 text-black rounded-tl-lg rounded-br-lg border border-black px-4 py-1'>
              Work with us
            </button>
          </Link>
        </div>
      </section>

      {/* testimonial */}
      <section className='flex items-center justify-between bg-testimonialmobile md:bg-testimonialdesktop bg-no-repeat bg-cover py-6'>
        <button className='hidden md:block bg-primary-green border border-gray-400 rounded-full font-semibold text-2xl px-2 ml-6'>
          &lt;
        </button>

        <div className='text-center my-20'>
          <h2 className='text-xl font-bold my-6 md:max-w-xl'>
            &quot;Their expertise in web development transformed our online
            presence, leading to a significant increase in engagement and
            sales.&quot;
          </h2>

          <p className='font-semibold text-sm'>Lilian Kanyita</p>
          <span className='font-light text-xs text-gray-600'>
            CEO, The Claims Center Kenya Ltd{' '}
          </span>
        </div>

        <button className='hidden md:block bg-primary-green border border-gray-400 rounded-full font-semibold text-2xl px-2 mr-6'>
          &gt;
        </button>
      </section>

      {/* cta */}
      <section className='bg-contactctamobile md:bg-contactctadesktop bg-cover bg-no-repeat w-full p-6'>
        <div className='p-6 text-center w-fit space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>Let&apos;s Talk!</h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            &quot;Need a digital partner? We&apos;re here to help!&quot;
          </p>
          <Link href={'/contact'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2'>
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
