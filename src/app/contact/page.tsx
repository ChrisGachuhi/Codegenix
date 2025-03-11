import Image from 'next/image'
import Link from 'next/link'

import contactImage from '../../../public/Assets/Contact us/Contact us form desktop/Image.png'

const page = () => {
  return (
    <main>
      {/* hero */}
      <section className='bg-herohomedesktop bg-no-repeat bg-cover w-full flex flex-col p-6'>
        <div className='text-center md:text-left flex flex-col w-fit md:w-1/2'>
          <div className=''>
            <h1 className='text-3xl font-bold'>
              Let&apos;s Start a Conversation
            </h1>

            <p className='text-xl my-6'>
              We&apos;re here to help with your inquiries, collaborations, and
              consultations. Reach out today!
            </p>

            <Link href={'/contact'}>
              <button className='bg-primary-green px-6 py-2 border border-black rounded'>
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section className='flex flex-col md:flex-row gap-4 p-4'>
        <Image
          src={contactImage}
          alt='codegenix-contact-image'
          className='w-full md:w-1/2'
        />

        <div className='w-full md:w1/2 flex flex-col justify-center gap-4'>
          <div className='space-y-2'>
            <span className='text-sm font-bold'>Get in Touch</span> <br />
            <h2 className='text-2xl font-bold'>Contact Us</h2>
            <p>We&apos;re here to assist you with your inquiries.</p>
          </div>

          <form className='flex flex-col'>
            <label>Name</label>
            <input
              type='text'
              className='border border-gray-600 rounded-md p-2 mb-4'
            />

            <label>Email</label>
            <input
              type='text'
              className='border border-gray-600 rounded-md p-2 mb-4'
            />

            <label>Message</label>
            <textarea
              className='border border-gray-600 rounded-md p-2 mb-4'
              rows={6}
            />

            <input
              type='submit'
              className='bg-primary-green px-6 py-2 border border-black rounded-md w-full md:w-fit'
            />
          </form>
        </div>
      </section>

      {/*  */}
      <section className='p-2 md:p-6'>
        <h3 className='text-3xl font-bold'>We would love to meet you</h3>
        <p>Let&apos;s meet to discuss your goals. Coffee is on us</p>

        <div className='my-5'>
          <iframe
            className='w-full rounded-md'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2097393465275!2d36.809009669557305!3d-1.269526559144003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173bc3f02447%3A0x24a7e218a8ca3274!2s4%20Chiromo%20Ln%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1741337059067!5m2!1sen!2ske'
            width='800'
            height='600'
            loading='lazy'></iframe>
        </div>
      </section>
    </main>
  )
}

export default page
