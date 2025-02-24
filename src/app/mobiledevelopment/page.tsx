import Image from 'next/image'
import Link from 'next/link'

import brandingHero from '../../../public/Website Devt services/Landing page Mobile/Background.jpg'
import campaignIcon from '../../../public/Homepage/Why Choose Us Desktop/Socia_ Media Campaign.png'

const MobileDevelopment = () => {
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
            Turn Your App Idea into Reality
          </h1>

          <p className='text-sm font-light'>
            We design, develop, and launch high-performance mobile apps for iOS
            and Android, tailored to your business needs.
          </p>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              Let&apos;s Build Your App
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
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>
                Custom Mobile App Development
              </h3>

              <ul className='space-y-2 mt-2'>
                <li>
                  Tailored iOS & Android applications for businesses and
                  startups.
                </li>

                <li>
                  Scalable and feature-rich solutions designed for growth.
                </li>

                <li>UI/UX-focused design for enhanced user engagement.</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>
                Cross-Platform App Development
              </h3>

              <ul className='space-y-2 mt-2'>
                <li>
                  Build apps that work seamlessly on both iOS & Android.
                  development with a single codebase.
                </li>

                <li>
                  Cost-effective solutions using React Native & Flutter. Faster
                </li>

                <li>Faster development with a single codebase.</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>App UI/UX Design</h3>

              <ul className='space-y-2 mt-2'>
                <li>
                  Intuitive and user-friendly interfaces for the best
                  experience.
                </li>

                <li>
                  Wireframes & prototypes to ensure smooth app navigation.
                </li>

                <li>Aesthetic and functional designs that attract users.</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>
                App Publishing & Maintenance
              </h3>
              <ul className='space-y-2 mt-2'>
                <li>Google Play Store & Apple App Store publishing.</li>

                <li>
                  Performance optimization, security updates, and bug fixes.
                </li>

                <li>Ongoing support to keep your app running smoothly.</li>
              </ul>
            </div>
          </div>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green mb-6 text-black rounded-tl-lg rounded-br-lg border border-black px-4 py-1'>
              Start Learning Today
            </button>
          </Link>
        </div>
      </section>

      {/* Why train with us */}
      <section className='p-6'>
        <div className='p-4 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-6 text-center capitalize'>
            Why choose us?
          </h2>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'> Custom Solutions</h3>
              <p>Built for your unique business needs.</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>Fast & Secure Apps</h3>
              <p>High performance with top-tier security.</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                End-to-End Development
              </h3>
              <p>From design to deployment. </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                Scalable & Future-Proof
              </h3>
              <p>Apps designed for long-term growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='bg-ctaMobile md:bg-ctaDesktop bg-cover bg-no-repeat w-full p-6'>
        <div className='mx-auto p-6 text-center w-fit space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Let&apos;s Build Something Great Together!
          </h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            Have an app idea? Let’s bring it to life with cutting-edge design
            and development!
          </p>
          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2'>
              Book a Consult!
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default MobileDevelopment
