import Image from 'next/image'
import Link from 'next/link'

import brandingHero from '../../../public/Website Devt services/Landing page Mobile/Background.jpg'
import campaignIcon from '../../../public/Homepage/Why Choose Us Desktop/Socia_ Media Campaign.png'
const Training = () => {
  return (
    <main>
      {/* hero */}
      <section className='p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:flex-row-reverse'>
        <div className='p-4 space-y-4 text-center md:text-left md:p-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Learn, Build, and Grow with Expert-Led Training
          </h1>

          <p className='text-sm font-light'>
            Master web development, branding, and digital marketing through
            hands-on training designed for individuals and businesses.
          </p>

          <Link href={'/digital-marketing'}>
            <button className='bg-primary-green my-5 text-black rounded-tl-lg rounded-br-lg border border-black px-5 py-2 items-center'>
              Join Our Training Program
            </button>
          </Link>
        </div>

        <div className='p-4'>
          <Image
            src={brandingHero}
            alt='codegenix-background-webdevelopment'
            className='rounded-lg w-full'
          />
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
                Beginner to Advanced Web Development Training
              </h3>

              <ul className='space-y-2 mt-2'>
                <li>
                  Learn HTML, CSS, JavaScript, and full-stack development.
                </li>

                <li>Build real-world projects from scratch.</li>

                <li>Get SEO and UI/UX design insights.</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>
                Custom Courses for Individuals & Institutions
              </h3>

              <ul className='space-y-2 mt-2'>
                <li>
                  Tailored training for startups, businesses, and universities.
                </li>

                <li>Personalized coaching based on industry needs.</li>

                <li>Corporate training programs for digital transformation.</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>
                Hands-on Projects & Real-World Applications
              </h3>

              <ul className='space-y-2 mt-2'>
                <li>Work on live client projects for real experience.</li>

                <li>
                  Access tools & resources used by industry professionals.
                </li>

                <li>Portfolio-building guidance for job readiness.</li>
              </ul>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold my-2 text-md'>
                Internship Opportunities for Top Performers
              </h3>
              <ul className='space-y-2 mt-2'>
                <li>Get placed in real work environments after training.</li>

                <li>Connect with potential employers & industry experts.</li>

                <li>Receive mentorship & career guidance.</li>
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
            Why train with us
          </h2>

          <div className='container text-center my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>Expert Instructors</h3>
              <p>Learn from industry professionals.</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>
                Project-Based Learning
              </h3>
              <p>Build real projects, not just theory.</p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>Certification</h3>
              <p>Earn a certificate upon completion. </p>
            </div>

            <div className='bg-primary-gray flex flex-col px-4 py-8 justify-between items-center shadow-md space-y-3 md:space-y-0 border rounded-lg'>
              <Image src={campaignIcon} alt='value-icon' className='mb-3' />
              <h3 className='font-semibold text-xl mb-2'>Flexible Learning </h3>
              <p>Online and in-person options available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='bg-ctaMobile md:bg-ctaDesktop bg-cover bg-no-repeat w-full p-6'>
        <div className='mx-auto p-6 text-center w-fit space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Start Your Learning Journey Today?
          </h2>
          <p className='text-xl md:text-2xl text-gray-500'>
            Enrol Now & Upgrade Your Skills
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

export default Training
