import Image from 'next/image'
import Link from 'next/link'

import webHeroMobile from '../../../public/Website Devt services/Landing page Mobile/Background.jpg'
import serviceSummary from '../../../public/Website Devt services/Why choose Us Desktop/Image.jpg'
import landingPagesIcon from '../../../public/Website Devt services/Our services desktop/First service icon.png'
import ecommerceIcon from '../../../public/Website Devt services/Our services desktop/Second service icon.png'
import portalsIcon from '../../../public/Website Devt services/Our services desktop/Third service icon.png'
import hostingIcon from '../../../public/Website Devt services/Our services desktop/Fourth service icon.png'
import maintenanceIcon from '../../../public/Website Devt services/Our services desktop/Fifth service icon.png'

import consultationIcon from '../../../public/Website Devt services/Our Process Desktop/First process Icon.png'
import interfaceIcon from '../../../public/Website Devt services/Our Process Desktop/Second process Icon.png'
import developmentIcon from '../../../public/Website Devt services/Our Process Desktop/Third process Icon.png'
import testingIcon from '../../../public/Website Devt services/Our Process Desktop/Fourth process Icon.png'
import launchIcon from '../../../public/Website Devt services/Our Process Desktop/Fifth process Icon.png'

const WebDevelopment = () => {
  return (
    <main>
      {/* hero */}
      <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row'>
        <Image
          src={webHeroMobile}
          alt='codegenix-background-webdevelopment'
          className='w-full'
        />

        <div className='p-4 md:p-6 text-right'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Custom Websites That Convert & Scale
          </h1>

          <p className='text-sm font-light'>
            SEO ready, high performance websites built forbusinesses & personal
            brands
          </p>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              Let&apos;s Build Your Website
            </button>
          </Link>
        </div>
      </section>

      {/* service summary */}
      <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row'>
        <div className='p-6 md:p-10 flex flex-col justify-between'>
          <h2 className='text-4xl font-bold capitalize mb-4'>
            why choose our web development services?
          </h2>
          <ul className='space-y-3'>
            <li>
              <span className='font-semibold'>SEO Optimized Websites</span>:
              Rank higher & Drive organic traffic
            </li>

            <li>
              <span className='font-semibold'>Ad Optimized for Conversion</span>
              : Get better results from Google & Meta Ads
            </li>

            <li>
              <span className='font-semibold'>Custom UI/UX Design</span>:
              Engaging user friendly experience
            </li>

            <li>
              <span className='font-semibold'>
                Business Automation E-commerce
              </span>
              : Custom solutions fro growth
            </li>

            <li>
              <span className='font-semibold'>Organic Support & Security</span>:
              We ensure long term success
            </li>
          </ul>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              Get a Free Consultation
            </button>
          </Link>
        </div>

        <Image
          src={serviceSummary}
          alt='codegenix-service-summary'
          className='w-full'
        />
      </section>

      {/* service details */}
      <section className='bg-webServicesMobile md:bg-webServicesDesktop bg-cover bg-bottom p-6 text-center space-y-6'>
        <h2 className='text-4xl font-bold capitalize mb-4'>
          our sevices - what we offer:
        </h2>

        <div className='p-0 md:p-6 flex flex-wrap flex-col md:flex-row justify-center items-center gap-6 md:gap-20'>
          <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg w-80'>
            <Image src={landingPagesIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>
              Business & Personal Websites
            </h3>
            <p>Sleek SEO-friendly High-performing</p>
          </div>

          <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg w-80'>
            <Image src={ecommerceIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Ecommerce Solutions</h3>
            <p>Custom online stores & Payment integration</p>
          </div>

          <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg w-80'>
            <Image src={portalsIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Web Apps & Portals</h3>
            <p>Tailored business automation tools</p>
          </div>

          <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg w-80'>
            <Image src={hostingIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>
              Hosting, Security & Performance Optimization
            </h3>
            <p>Fast & Reliable websites</p>
          </div>

          <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg w-80'>
            <Image src={maintenanceIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>
              Maintenance & Support
            </h3>
            <p>Continuous updates & troubleshooting</p>
          </div>
        </div>

        <Link href={'/digital-marketing'}>
          <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
            See Our Work
          </button>
        </Link>
      </section>

      {/* our process */}
      <section className='bg-webProcess bg-cover bg-left p-6 text-center space-y-6'>
        <h2 className='text-4xl font-bold capitalize mb-4'>
          our process - how we work:
        </h2>

        <div className='p-0 md:p-6 flex flex-col justify-center items-center gap-6'>
          <div className='bg-white flex flex-col md:flex-row md:gap-6 p-6 md:p-4 justify-left items-center shadow-md space-y-3 md:space-y-0 border rounded-lg md:w-2/4'>
            <Image src={consultationIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Consultation</h3>
            <p>Understanding your business & goals</p>
          </div>

          <div className='bg-white flex flex-col md:flex-row md:gap-6 p-6 md:p-4 justify-left items-center shadow-md space-y-3 md:space-y-0 border rounded-lg md:w-2/4'>
            <Image src={interfaceIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>UI/UX Design</h3>
            <p>Crafting intuitive, engaging layouts</p>
          </div>

          <div className='bg-white flex flex-col md:flex-row md:gap-6 p-6 md:p-4 justify-left items-center shadow-md space-y-3 md:space-y-0 border rounded-lg md:w-2/4'>
            <Image src={developmentIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Development</h3>
            <p>Coding with the latest technologies</p>
          </div>

          <div className='bg-white flex flex-col md:flex-row md:gap-6 p-6 md:p-4 justify-left items-center shadow-md space-y-3 md:space-y-0 border rounded-lg md:w-2/4'>
            <Image src={testingIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>
              Testing & SEO optimization
            </h3>
            <p>Ensure high performance</p>
          </div>

          <div className='bg-white flex flex-col md:flex-row md:gap-6 p-6 md:p-4 justify-left items-center shadow-md space-y-3 md:space-y-0 border rounded-lg md:w-2/4'>
            <Image src={launchIcon} alt='value-icon' className='mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Launch & Support</h3>
            <p>Smooth deployment with ongoing suport</p>
          </div>
        </div>

        <Link href={'/digital-marketing'}>
          <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
            Start Your Project
          </button>
        </Link>
      </section>

      {/* cta */}
      <section className='bg-ctaMobile md:bg-ctaDesktop bg-cover bg-no-repeat w-full p-6'>
        <div className='mx-auto p-6 text-center w-fit space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>Get in Touch!</h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            Let&apos;s Build Your Website!
          </p>
          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2'>
              Get you Quote
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default WebDevelopment
