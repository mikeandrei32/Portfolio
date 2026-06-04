const About = () => {
    return(
        <div id="About" className="h-[80vh] flex justify-evenly items-center gap-30 mt-10 mb-15 bg-[#23293915]">
            <div className="flex flex-col">
                <p className="text-white text-[36px] mb-7 font-bold">About Me</p>
                <div className="bg-[#171F33] rounded-2xl">
                    <p className="w-170 text-[16px] text-[#BCC9CD] p-5">
                        As a 3rd-year BSIT student, I specialize in frontend development and enjoy building clean, responsive, and user-focused interfaces. I’m focused on creating smooth and intuitive web experiences that connect design with functionality. 
                        <br />
                        <br />
                        I’m continuously improving my skills in modern frontend technologies like React and building projects that strengthen my understanding of real-world UI/UX and web performance. My goal is to grow as a frontend developer and secure a role where I can contribute to creating engaging and efficient user interfaces.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center justify-center bg-[#171F33] py-10 px-25 rounded-xl leading-none">
                    <p className="text-[48px] text-[#4CD7F6] font-bold mb-1">3rd</p>
                    <p className="uppercase text-[#BCC9CD] text-[12px] font-jetbrains">Year Bsit Student</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#171F33] py-10 px-25 rounded-xl leading-none">
                    <p className="text-[48px] text-[#4CD7F6] font-bold mb-1">0</p>
                    <p className="uppercase text-[#BCC9CD] text-[12px] font-jetbrains">Project</p>
                </div>
            </div>
        </div>
    )
}

export default About;