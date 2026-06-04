import image from '../assets/image.png'
import dot from '../assets/dot.png'
import terminal from '../assets/terminal.png'

const Hero = () => {
    return(
        <div className="h-screen flex justify-evenly items-center px-10 gap-10">
            <div>
                <div className='bg-[#171F33] w-60 h-8 rounded-2xl flex flex-row items-center justify-center gap-1 mb-3'>
                    <img src={dot}/>
                    <p className="uppercase text-[10px] text-[#4CD7F6] font-jetbrains">
                        Available for new opportunities
                    </p>
                </div>
                <h1 className="text-[#DAE2FD] text-[75px] font-semibold w-160 mb-5 leading-none">
                    Aspiring frontend developer building modern web apps.
                </h1>
                <p className="text-[#b0b0b0] text-[18px] w-130">
                    BSIT student passionate about building modern web and mobile apps using React.
                </p>
                <div className='mt-10 flex gap-5'>
                    <button className='bg-[#4CD7F6] text-[16px] font-bold h-14 w-40 rounded-xl cursor-pointer'>View Projects</button>
                    <button className='bg-[#171F33] text-[16px] text-[#4CD7F6] border border-[#d3d3d321] font-bold h-14 w-40 rounded-xl cursor-pointer'>Contact Me</button>
                </div>
                <div className='mt-15 flex gap-2'>
                    <button className='bg-[#171F33] text-[#4CD7F6] text-[12px] px-3 py-1 rounded border border-[#d3d3d311]'>React</button>
                    <button className='bg-[#171F33] text-[#4CD7F6] text-[12px] px-3 rounded border border-[#d3d3d311]'>Tailwindcss</button>
                    <button className='bg-[#171F33] text-[#4CD7F6] text-[12px] px-3 rounded border border-[#d3d3d311]'>C</button>
                    <button className='bg-[#171F33] text-[#4CD7F6] text-[12px] px-3 rounded border border-[#d3d3d311]'>Python</button>
                    <button className='bg-[#171F33] text-[#4CD7F6] text-[12px] px-3 rounded border border-[#d3d3d311]'>JavaScript</button>
                </div>
            </div>
            <div className='z-1 w-120 relative'>
                <img src={image} alt="" className='rounded-4xl object-cover' />
                <div className='backdrop-blur-md border border-white/10 flex justify-between items-center text-white absolute top-96 right-7 bg-[#171F33]/70 w-106 py-3.5 px-5 rounded-xl'>
                    <div>
                        <p className='text-[10px] text-[#4CD7F6] uppercase font-jetbrains font-bold'>Mike Andrei M. Gomez</p>
                        <p className='text-[12px] text-[#BCC9CD]'>BSIT | Web and Mobile App</p>
                    </div>
                    <div>
                        <img src={terminal}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;