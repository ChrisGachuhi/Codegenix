import Image from 'next/image'
import Link from 'next/link'

import marketingHero from '../../../public/Assets/Digital Marketing services/Grow your brand desktop/Image.jpg'
import socialIcon from '../../../public/Assets/Digital Marketing services/What we offer desktop/Social media icon.png'
import contentIcon from '../../../public/Assets/Digital Marketing services/What we offer desktop/content creation icon.png'
import adsIcon from '../../../public/Assets/Digital Marketing services/What we offer desktop/Google & meta icon.png'
import performanceIcon from '../../../public/Assets/Digital Marketing services/What we offer desktop/SEO icon.png'
import emailIcon from '../../../public/Assets/Digital Marketing services/What we offer desktop/Email icon.png'

import strategyIcon from '../../../public/Assets/Digital Marketing services/Why choose us dektop/Proven strategies icon.png'
import creativeIcon from '../../../public/Assets/Digital Marketing services/Why choose us dektop/Creative icon.png'
import drivenIcon from '../../../public/Assets/Digital Marketing services/Why choose us dektop/Perfomance icon.png'
import supportIcon from '../../../public/Assets/Digital Marketing services/Why choose us dektop/dedicated support icon.png'

const page = () => {
  return (
    <main>
      {/* hero */}
      <section className='p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row-reverse'>
        <div className='p-4 space-y-4 text-center md:text-left md:p-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Grow Your Brand with Data-Driven Digital Marketing
          </h1>

          <p className='text-sm font-light'>
            We craft strategic marketing campaigns that boost visibility, drive
            engagement, and maximize conversions.
          </p>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              Boost Your Brand
            </button>
          </Link>
        </div>

        <div className='p-4'>
          <Image
            src={marketingHero}
            alt='codegenix-background-webdevelopment'
            className='rounded-lg w-full'
          />
        </div>
      </section>

      <section className='bg-webServicesMobile md:bg-webServicesDesktop bg-cover bg-bottom p-6 text-center justify-center space-y-6'>
        <h2 className='text-3xl font-semibold mt-6 text-center'>
          What We Offer
        </h2>

        <div className='p-0 md:p-6 flex flex-wrap flex-col md:flex-row justify-center items-center gap-10 md:w-3/4 mx-auto'>
          <div className='w-full md:w-2/5 bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
            <Image
              src={socialIcon}
              alt='value-icon'
              className='mb-3'
              height={130}
            />
            <h3 className='font-semibold my-2 text-md'>
              Social Media Strategy & Management
            </h3>

            <ul className='space-y-2 mt-2'>
              <li>Tailored content calendars</li>

              <li>Profile optimization for maximum reach </li>

              <li>Community engagement & brand monitoring</li>
            </ul>
          </div>

          <div className='w-full md:w-2/5 bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
            <Image
              src={contentIcon}
              alt='value-icon'
              className='mb-3'
              height={130}
            />
            <h3 className='font-semibold my-2 text-md'>Content Creation </h3>

            <ul className='space-y-2 mt-2'>
              <li>High-quality posts, reels & animations</li>

              <li>Storytelling that builds brand identity </li>

              <li>Consistent visuals for strong engagement</li>
            </ul>
          </div>

          <div className='w-full md:w-2/5 bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
            <Image
              src={adsIcon}
              alt='value-icon'
              className='mb-3'
              height={130}
            />
            <h3 className='font-semibold my-2 text-md'>
              Google & Meta Ads (Lead Generation & Conversions)
            </h3>

            <ul className='space-y-2 mt-2'>
              <li>Targeted ad campaigns with A/B testing</li>

              <li>Budget optimization for better ROI</li>

              <li>Conversion tracking & performance reports</li>
            </ul>
          </div>

          <div className='w-full md:w-2/5 bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
            <Image
              src={performanceIcon}
              alt='value-icon'
              className='mb-3'
              height={130}
            />
            <h3 className='font-semibold my-2 text-md'>
              SEO & Performance Marketing
            </h3>
            <ul className='space-y-2 mt-2'>
              <li>On-page & off-page SEO</li>

              <li>Keyword research & content optimization </li>

              <li>Google Analytics & insights reporting</li>
            </ul>
          </div>

          <div className='w-full md:w-2/5 bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
            <Image
              src={emailIcon}
              alt='value-icon'
              className='mb-3'
              height={130}
            />
            <h3 className='font-semibold my-2 text-md'>
              Email Marketing & Automation
            </h3>
            <ul className='space-y-2 mt-2'>
              <li>Personalized campaigns for better engagement</li>

              <li>Automated workflows for lead nurturing</li>

              <li>Performance tracking & campaign refinement</li>
            </ul>
          </div>
        </div>

        <Link href={'/contact'}>
          <button className='bg-primary-green mt-6 text-black rounded-tl-lg rounded-br-lg border border-black px-4 py-1'>
            Let&apos;s Talk Strategy!
          </button>
        </Link>
      </section>

      {/* Why choose us */}
      <section className='p-6'>
        <div className='p-4 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-6 text-center capitalize'>
            Why choose us?
          </h2>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={strategyIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>
                Proven Growth Strategies
              </h3>
              <p>We use data-backed techniques to grow your audience.</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={creativeIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>
                Creative & Engaging Content
              </h3>
              <p>Eye-catching designs & compelling copy for maximum impact.</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={drivenIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>
                Performance-Driven Approach
              </h3>
              <p>
                We work with you every step of the way to achieve your marketing
                goals.
              </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image
                src={supportIcon}
                alt='value-icon'
                className='mb-3'
                height={130}
              />
              <h3 className='font-semibold text-xl mb-2'>Dedicated Support </h3>
              <p>Apps designed for long-term growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='bg-ctaMobileMarketing md:bg-ctaDesktopMarketing bg-cover bg-no-repeat w-full p-6'>
        <div className='mx-auto p-6 text-center w-fit space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Ready to take your digital marketing to the next level?
          </h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            Let&apos;s craft a winning strategy for your brand today!
          </p>
          <Link href={'/contact'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2'>
              Book a Consult!
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default page
