const Projects = () => {
    return(
        <div id="Projects" className="h-screen text-white flex flex-col justify-center">
            <h2 className="text-[36px] text-[#DAE2FD] font-bold ps-40">Selected Projects</h2>
            <p className="text-[16px] text-[#BCC9CD] mb-5 ps-40">A collection of feats and creative ventures.</p>
            <div className="flex flex-wrap gap-8 justify-center h-130 rounded">
                <div className="border border-gray-700 bg-[#171F33] rounded-2xl">
                    <img src="#" alt="placeholder" className="border border-gray-700 rounded-t-lg w-100 h-70"/>
                    <div className="ps-8 pt-5">
                        <button className="bg-[#131827] text-[#4CD7F6] text-[10px] px-3 py-0.5 rounded border border-[#d3d3d311] me-2">React</button>
                        <button className="bg-[#131827] text-[#4CD7F6] text-[10px] px-3 py-0.5 rounded border border-[#d3d3d311] mb-5">JavaScript</button>
                        <h3 className="text-[#DAE2FD] text-[24px] font-bold mb-3">Project Title</h3>
                        <p className="text-[#BCC9CD] text-[14px]">Project Description</p>
                        <button className="text-[#4CD7F6] text-[12px] font-bold pt-10 me-3"><a href="#">Demo</a></button>
                        <button className="text-[#BCC9CD] text-[12px] font-bold"><a href="#">Source</a></button>
                    </div>
                </div>
                <div className="border border-gray-700 bg-[#171F33] rounded-2xl">
                    <img src="#" alt="placeholder" className="border border-gray-700 rounded-t-lg w-100 h-70"/>
                    <div className="ps-8 pt-5">
                        <button className="bg-[#131827] text-[#4CD7F6] text-[10px] px-3 py-0.5 rounded border border-[#d3d3d311] me-2">React</button>
                        <button className="bg-[#131827] text-[#4CD7F6] text-[10px] px-3 py-0.5 rounded border border-[#d3d3d311] mb-5">JavaScript</button>
                        <h3 className="text-[#DAE2FD] text-[24px] font-bold mb-3">Project Title</h3>
                        <p className="text-[#BCC9CD] text-[14px]">Project Description</p>
                        <button className="text-[#4CD7F6] text-[12px] font-bold pt-10 me-3"><a href="#">Demo</a></button>
                        <button className="text-[#BCC9CD] text-[12px] font-bold"><a href="#">Source</a></button>
                    </div>
                </div>
                <div className="border border-gray-700 bg-[#171F33] rounded-2xl">
                    <img src="#" alt="placeholder" className="border border-gray-700 rounded-t-lg w-100 h-70"/>
                    <div className="ps-8 pt-5">
                        <button className="bg-[#131827] text-[#4CD7F6] text-[10px] px-3 py-0.5 rounded border border-[#d3d3d311] me-2">React</button>
                        <button className="bg-[#131827] text-[#4CD7F6] text-[10px] px-3 py-0.5 rounded border border-[#d3d3d311] mb-5">JavaScript</button>
                        <h3 className="text-[#DAE2FD] text-[24px] font-bold mb-3">Project Title</h3>
                        <p className="text-[#BCC9CD] text-[14px]">Project Description</p>
                        <button className="text-[#4CD7F6] text-[12px] font-bold pt-10 me-3"><a href="#">Demo</a></button>
                        <button className="text-[#BCC9CD] text-[12px] font-bold"><a href="#">Source</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;