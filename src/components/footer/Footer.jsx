import './Footer.css'
import Github from '../../images/icon-github.svg'
import Twitter from '../../images/icon-twitter.svg'
import LinkedIn from '../../images/icon-linkedin.svg'

export default function Footer() {
  return (
    <>
      <div className='footer flex flex-col '>
        <div className=''>
          <hr className='mb-20 mx-4 md:mb-24 md:mx-40 mt-20' />
        </div>
        <div className='flex flex-col md:flex-row md:mb-24 items-center md:mx-40 justify-between'>
          <h2 className='text-4xl font-bold leading-8 white tracking-tighter mb-5 md:mb-0 title'>
            henryogbu
          </h2>
          <div className='flex flex-row gap-8 items-center sm:mt-5 mb-14 md:mb-0 '>
            <a
              href='https://github.com/kinghennry'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Github} alt='github' />
            </a>

            <a
              href='https://www.linkedin.com/in/henry-ogbu-10b60b231'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={LinkedIn} alt='linkedin' />
            </a>
            <a
              href='https://twitter.com/nzedikee'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Twitter} alt='twitter' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
