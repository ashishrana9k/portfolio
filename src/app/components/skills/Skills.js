import React from 'react'

export default function Skills() {
    return (
        <div className='container'>
            <div className='py-20 '>
               <div className="text-center py-4">
                 <h1 className='text-4xl'>Skills</h1>
                <p className='text-gray-400 py-4'>Here are some of my skills on which I have been working for the past 1 year.</p>
               </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className='border rounded-xl p-4'>
                        <h4 className='text-center text-2xl'>Skills</h4>
                        <div>
                            <ul className='flex flex-wrap justify-center'>
                                <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/HTML.svg" className='w-[20px]' alt="" />
                                    HTML
                                </li>
                                 <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/CSS.svg" className='w-[20px]' alt="" />
                                    CSS
                                </li>
                                <li className='flex gap-2 px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/Javascript.svg" className='w-[20px]' alt="" />
                                    Javascript
                                </li>
                                <li className='flex gap-2 px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/Bootstrap.svg" className='w-[20px]' alt="" />
                                    Bootstrap
                                </li>
                               <li className='flex gap-2 px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/tailwind.svg" className='w-[20px]' alt="" />
                                    Tailwind
                                </li>
                                <li className='flex gap-2 px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/next.svg" className='w-[20px]' alt="" />
                                   Next.js
                                </li> 
                                  <li className='flex gap-2 px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/react.svg" className='w-[20px]' alt="" />
                                   React.js
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div className='border rounded-xl p-4'>
                        <div className='text-center'>
                           <h4 className="text-2xl">Frontend Tools</h4>
                           <div>
                             <ul className='flex flex-wrap justify-center'>
                                <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/postman.svg" className='w-[20px]' alt="" />
                                    Postman
                                </li>
                                <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/git.svg" className='w-[20px]' alt="" />
                                    Git
                                </li>
                                 <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/github.svg" className='w-[20px]' alt="" />
                                    Github
                                </li>
                                <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/vercel.png" className='w-[20px]' alt="" />
                                    Vercel
                                </li>
                                 <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/vercel.png" className='w-[20px]' alt="" />
                                    Vercel
                                </li>
                                <li className='flex gap-2 items-center px-3 py-2 m-3 rounded bg-[#1F2937] '>
                                    <img src="/images/figma.svg" className='w-[20px]' alt="" />
                                    Figma 
                                </li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
