import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className='contactForm flex flex-col md:flex-row md:mt-32 justify-center md:justify-normal'>
        <div className='md:w-1/2 mx-4 md:mx-40  md:mt-20 ' id='contact'>
          <h2 className='font-space sm:mt-14 md:text-8xl leading-88 text-center md:text-left text-4xl font-bold leading-40 tracking-tight mt-14 md:mt-0'>
            Contact
          </h2>
          <p className='text-white font-space text-base font-medium leading-7 mt-5 md:mt-8 justify-center items-center md:justify-normal'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className='flex flex-col mx-4 md:w-1/2  mt-12 md:mx-40  md:mt-20'>
          <form action='https://formspree.io/f/mqakqwgg' method='POST'>
            <div className='mb-8'>
              <input
                type='text'
                placeholder='NAME'
                id='name'
                name='name'
                className='text-base text-white font-medium leading-6 tracking-tight font-space opacity-50 h-11 w-full '
                required
              />
              <hr className='md:mr-32 w-full ' />
            </div>
            <div className='mb-8'>
              <input
                type='text'
                placeholder='EMAIL'
                name='email'
                id='email'
                className='text-base font-medium  text-white leading-6 tracking-tight font-space opacity-50 h-11 w-full'
                required
              />

              <hr className='md:mr-32 w-full' />
            </div>
            <div className='mb-8'>
              <textarea
                type='text'
                placeholder='MESSAGE'
                name='message'
                id='message'
                className='text-base text-white font-medium leading-6 tracking-tight font-space opacity-50 w-full '
                required
              />

              <hr className='md:mr-32 w-full' />
            </div>
            <div className='mb-8 message flex flex-col items-end justify-end'>
              <button
                type='submit'
                className='font-space contact-button md:mb-3 font-semibold leading-26 tracking-wider text-white text-16'
              >
                SEND MESSAGE
              </button>
              <hr className='w-32 mt-2 border-none' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
