import frontendImg from '../assets/arsenal/frontend-img.png'
import backendImg from '../assets/arsenal/backend-img.png'
import databaseImg from '../assets/arsenal/database-img.png'
import infraImg from '../assets/arsenal/infra-img.png'

const Arsenal = () => {
    return(
        <div id='Arsenal' className="h-[80vh] text-white flex flex-col justify-center items-center mb-10">
            <p className="text-[36px] text-[#DAE2FD] font-bold">Technical Arsenal</p>
            <p className="text-[12px] text-[#BCC9CD] font-jetbrains mb-15">Tools of the trade</p>
            <div className='flex gap-10'>
                <div className='bg-[#171F33] w-60 h-80 rounded-xl pt-8 ps-8'>
                    <img src={ frontendImg } className='p-3 bg-[#dae2fd14] w-10 rounded-md mb-4.5'/>
                    <p className='text-[20px] text-[#DAE2FD] font-bold mb-4.5'>Frontend</p>
                    <div className='flex flex-col gap-2'>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> React</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> JavaScript</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Tailwindcss</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Bootstrap</p>
                    </div>
                </div>
                <div className='bg-[#171F33] w-60 h-80 rounded-xl pt-8 ps-8'>
                    <img src={ backendImg } className='p-3 bg-[#dae2fd14] w-10 rounded-md mb-4.5'/>
                    <p className='text-[20px] text-[#DAE2FD] font-bold mb-4.5'>Backend</p>
                    <div className='flex flex-col gap-2'>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Django</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> ASP.NET Core</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Exploring</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Exploring</p>
                    </div>
                </div>
                <div className='bg-[#171F33] w-60 h-80 rounded-xl pt-8 ps-8'>
                    <img src={ databaseImg } className='p-3 bg-[#dae2fd14] w-10 rounded-md mb-4.5'/>
                    <p className='text-[20px] text-[#DAE2FD] font-bold mb-4.5'>Database</p>
                    <div className='flex flex-col gap-2'>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> PostgreSQL</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> MongoDB</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> MySQL</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Exploring</p>
                    </div>
                </div>
                <div className='bg-[#171F33] w-60 h-80 rounded-xl pt-8 ps-8'>
                    <img src={ infraImg } className='p-3 bg-[#dae2fd14] w-10 rounded-md mb-4.5'/>
                    <p className='text-[20px] text-[#DAE2FD] font-bold mb-4.5'>Infrastructure</p>
                    <div className='flex flex-col gap-2'>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Vercel</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> WSL</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Git & Github</p>
                        <p className='font-jetbrains text-[14px] text-[#BCC9CD]'><span className='text-[#ADC6FF] text-[12px]'>&gt;</span> Linux (Ubuntu)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arsenal;