const About = () => {
    return(
        <section id="about" className="h-150 w-full">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl text-violet-500 font-semibold font-sans mb-5">About Me</h1>
                <p className="text-gray-400 text-xl w-200 text-center font-sans">I’m an IT student and aspiring frontend/software engineer specializing in Web and Mobile Application Development. I build responsive web apps with React & Tailwind CSS and craft native & cross-platform mobile apps with Kotlin and Flutter. Driven by hackathons and hands-on capstone projects, I focus on delivering clean code, intuitive UI workflows, and accessible digital experiences.</p>
                <div className="flex justify-center items-center gap-8 mt-5">
                    <div className="flex justify-center items-center gap-3 border font-semibold py-4 px-8 rounded bg-violet-500">
                        <svg className="w-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1359 18.2928C16.5264 18.6833 17.1596 18.6833 17.5501 18.2928L22.4375 13.4006C23.2179 12.6194 23.2176 11.3536 22.4369 10.5728L17.5465 5.68247C17.156 5.29195 16.5228 5.29195 16.1323 5.68247C15.7418 6.073 15.7418 6.70616 16.1323 7.09669L20.3179 11.2823C20.7085 11.6729 20.7085 12.306 20.3179 12.6965L16.1359 16.8786C15.7454 17.2691 15.7454 17.9023 16.1359 18.2928Z" fill="white"></path> <path d="M7.88675 5.68247C7.49623 5.29195 6.86307 5.29195 6.47254 5.68247L1.58509 10.5747C0.804698 11.3559 0.805008 12.6217 1.58579 13.4024L6.47615 18.2928C6.86667 18.6833 7.49984 18.6833 7.89036 18.2928C8.28089 17.9023 8.28089 17.2691 7.89036 16.8786L3.70471 12.6929C3.31419 12.3024 3.31419 11.6692 3.70472 11.2787L7.88675 7.09669C8.27728 6.70616 8.27728 6.073 7.88675 5.68247Z" fill="white"></path> </g></svg>
                        <a href="#" className="text-white text-sm">View Projects</a>
                    </div>
                    <div className="flex justify-center items-center gap-2 border border-violet-500 py-4 px-10 rounded">
                        <svg className="w-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                        <a href="#" className="text-violet-500 text-sm">Contact Me</a>
                    </div>
                </div>
                <div className="flex gap-7">
                    <div className="text-white border border-gray-800 bg-gray-900 rounded-3xl w-100 h-45 flex flex-col justify-center p-7">
                        <div className="flex justify-between">
                            <div className="bg-gray-700 rounded-full w-15 h-15 flex justify-center items-center mb-4">
                                <svg className="w-8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1359 18.2928C16.5264 18.6833 17.1596 18.6833 17.5501 18.2928L22.4375 13.4006C23.2179 12.6194 23.2176 11.3536 22.4369 10.5728L17.5465 5.68247C17.156 5.29195 16.5228 5.29195 16.1323 5.68247C15.7418 6.073 15.7418 6.70616 16.1323 7.09669L20.3179 11.2823C20.7085 11.6729 20.7085 12.306 20.3179 12.6965L16.1359 16.8786C15.7454 17.2691 15.7454 17.9023 16.1359 18.2928Z" fill="white"></path> <path d="M7.88675 5.68247C7.49623 5.29195 6.86307 5.29195 6.47254 5.68247L1.58509 10.5747C0.804698 11.3559 0.805008 12.6217 1.58579 13.4024L6.47615 18.2928C6.86667 18.6833 7.49984 18.6833 7.89036 18.2928C8.28089 17.9023 8.28089 17.2691 7.89036 16.8786L3.70471 12.6929C3.31419 12.3024 3.31419 11.6692 3.70472 11.2787L7.88675 7.09669C8.27728 6.70616 8.27728 6.073 7.88675 5.68247Z" fill="white"></path> </g></svg>
                            </div>
                            <p className="text-4xl font-bold mt-2">0</p>
                        </div>
                        <div>
                            <p className="uppercase text-sm text-gray-300 mb-1">Total Projects</p>
                            <div className="flex justify-between items-center">
                                <p className="font-sans text-xs text-gray-400">Innovative web & mobile solutions crafted</p>
                                <svg className="w-4" fill="#9ca3af" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path> </g> </g> </g></svg>
                            </div>
                        </div>
                    </div>

                    <div className="text-white border border-gray-800 bg-gray-900 rounded-3xl w-100 h-45 flex flex-col justify-center p-7">
                        <div className="flex justify-between">
                            <div className="bg-gray-700 rounded-full w-15 h-15 flex justify-center items-center mb-4">
                                <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 13.4722V21L12 19L16 21V13.4722M18 9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                            <p className="text-4xl font-bold mt-2">2</p>
                        </div>
                        <div>
                            <p className="uppercase text-sm text-gray-300 mb-1">Certificates</p>
                            <div className="flex justify-between items-center">
                                <p className="font-sans text-xs text-gray-400">Professional skills validated</p>
                                <svg className="w-4" fill="#9ca3af" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path> </g> </g> </g></svg>
                            </div>
                        </div>
                    </div>

                    <div className="text-white border border-gray-800 bg-gray-900 rounded-3xl w-100 h-45 flex flex-col justify-center p-7">
                        <div className="flex justify-between">
                            <div className="bg-gray-700 rounded-full w-15 h-15 flex justify-center items-center mb-4">
                                <svg className="w-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z" stroke="white" stroke-width="1.5"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="white" stroke-width="1.5"></path> </g></svg>
                            </div>
                            <p className="text-4xl font-bold mt-2">2</p>
                        </div>
                        <div>
                            <p className="uppercase text-sm text-gray-300 mb-1">Skillset & Tech Stack</p>
                            <div className="flex justify-between items-center">
                                <p className="font-sans text-xs text-gray-400">Diverse toolkit of modern technologies</p>
                                <svg className="w-4" fill="#9ca3af" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path> </g> </g> </g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;