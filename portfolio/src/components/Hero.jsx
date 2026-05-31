import image from '../assets/image.png'
import dot from '../assets/dot.png'

const Hero = () => {
    return(
        <div className="h-[90vh] flex justify-evenly items-center px-10 gap-10">
            <div>
                <div className='bg-[#171F33] w-60 h-8 rounded-2xl flex flex-row items-center justify-center gap-1 mb-8'>
                    <img src={dot}/>
                    <p className="uppercase text-[10px] text-[#4CD7F6] font-jetbrains">
                        Available for new opportunities
                    </p>
                </div>
                <h1 className="text-[#DAE2FD] text-8xl font-semibold w-210 mb-8">
                    Aspiring frontend developer building modern web apps.
                </h1>
                <p className="text-[#b0b0b0] text-[18px] w-130">
                    BSIT student passionate about building modern web and mobile apps using React.
                </p>
            </div>
            <div className='z-1 w-120'>
                <img src={image} alt="" className='rounded-4xl' />
            </div>
        </div>
    )
}

export default Hero;