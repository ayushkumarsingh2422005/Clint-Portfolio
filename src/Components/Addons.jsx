import React from 'react'
import Tilt from 'react-parallax-tilt';

export default function Addons() {
    return (
        <div className='container mx-auto p-4 pt-0 relative'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 pt-0 w-full flex flex-col md:flex-row'>
                <div className='w-full sticky top-10 h-fit md:bg-transparent bg-black z-10 p-8'>
                    Softwares
                </div>
                <div className='w-full md:p-10 h-full md:pt-40 pt-20'>
                    <div className='flex gap-5'>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Revit</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Autocad</h1>
                            </div>
                        </Tilt>
                    </div>

                    <div className='flex gap-5'>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>SketchUp</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Rhino</h1>
                            </div>
                        </Tilt>
                    </div>
                    <div className='flex gap-5'>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Enscape</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>D5</h1>
                            </div>
                        </Tilt>
                    </div>

                    <div className='flex gap-5'>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Vray</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>TwinMotion</h1>
                            </div>
                        </Tilt>
                    </div>
                    <div className='flex gap-5'>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Photoshop</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Indesign</h1>
                            </div>
                        </Tilt>
                    </div>

                    <div className='flex gap-5'>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>DesignBuilder</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>MsSuite</h1>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}
