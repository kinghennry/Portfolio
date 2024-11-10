import './Hero.css'
import Henry from '../../images/tmuyh7.jpg'
import Rings from '../../images/pattern-rings.svg'

export default function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row mt-5'>
      <div>
        <img src={Rings} alt='rings design' className='mt-8 md:mt-16' />
        <div className='hero md:ml-40 '>
          <h1 className='font-space text-5xl font-bold leading-88 md:tracking-tighter mt-10 md:-mt-16  font-Space sm:text-4xl leading-10 tracking-tight text-center md:text-left md:font-bold md:text-7xl md:leading-88'>
            Nice to meet you! <br /> I'm Henry Ogbu .
          </h1>
          <p className='mt-6 mb-4 md:mt-11 text-base font-medium leading-7 font-space text-center md:text-left md:mb-16'>
            I’m a fullstack developer
            <br />
            passionate about building accessible web apps <br /> that users love
            by using accessible HTML,modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I use React for the
            frontend and Node Js for the backend when writing Javascript code.
            I’m based in Nigeria but I’m happy working remotely and have
            experience in remote teams. When I’m not coding, you’ll find me
            playing video games or reading novels. I’d love you to check out my
            work.
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start justify-center'>
          <a
            href='#contact'
            className='hover:text-greenUnderlined contact mt-6 font-space text-base font-bold leading-6 tracking-wider md:ml-40 md:text-left'
          >
            CONTACT ME
          </a>
          <hr className='contacthr border-none w-28 mt-2 md:ml-40' />
        </div>
      </div>
      <div className='image mx-3 sm:mt-12 md:mr-40'>
        <img src={Henry} alt="Developer's picture" className='' />
      </div>
    </div>
  )
}
