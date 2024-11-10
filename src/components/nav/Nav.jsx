import './Nav.css'
import Github from '../../images/icon-github.svg'
import Twitter from '../../images/icon-twitter.svg'
import LinkedIn from '../../images/icon-linkedin.svg'

export default function Navbar() {
  return (
    <div className='navbar flex flex-col md:flex-row items-center justify-between md:mx-40 mt-5'>
      <div>
        <h2 className='text-4xl font-bold leading-8 tracking-tighter md:mr-96 '>
          henryogbu
        </h2>
      </div>
      <div className='flex flex-row gap-8 items-center mt-5 md:mt-0  sm:pb-15 '>
        <a
          href='https://github.com/kinghennry'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Github} alt='github' className='' />
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
  )
}
