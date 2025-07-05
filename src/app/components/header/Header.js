import React from 'react'


export default function Header() {
    return (
        <>
            <div className='container'>
                <div className='mx-auto py-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl font-bold'>Portfolio</h1>
                        <div>
                            <ul className='flex gap-8'>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Skills</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className='border border-[#9333EA]   hover:bg-[#9333EA] cursor-pointer py-1 px-8 rounded-md'>
                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='flex items-center h-100'>
                    <div className='grid grid-cols-2 items-center '>
                        <div className="space-y-4">
                            <h1 className='text-5xl'>HI, I am</h1>
                            <p className='text-3xl '>welcome to my portfolio</p>
                            <p className='text-lg'>Frontend Developer skilled in JavaScript, ReactJS, Next.js, Tailwind CSS, and Redux. I build clean, responsive interfaces and turn complex problems into simple, interactive solutions. Always aiming for performance and usability.</p>
                            <button className='border font-semibold hover:bg-[#A855F7]   bg-[#9333EA] border-[#9333EA] hover:border-[#9333EA] cursor-pointer py-2 px-6 rounded-md'>
                                <a href="/resume/resume1.pdf" target='_black'>Check Resume</a>
                            </button>
                        </div>
                        <div className='flex justify-center'>
                            <img src="./images/profile.jpg" className='h-60 border rounded-[30%] ' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
