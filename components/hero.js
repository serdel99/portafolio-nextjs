import Image from 'next/image'
import heroImage from '../assets/22.png'

const Hero = () => {

    return (
        <div className="hero">
            <div className='hero__content'>
                <h1 className='hero__title'>Hi, I am Sergio, <br />
                    Frontend Developer</h1>
                <p className='hero__description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className='hero__button'>
                    Download Resume
                </button>
            </div>
            <Image
                src={heroImage}
                alt="Picture of the author"
            />
        </div>
    )
}

export default Hero