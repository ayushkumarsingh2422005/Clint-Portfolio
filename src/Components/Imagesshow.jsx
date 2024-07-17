import React from 'react'
import img1 from '../Assets/Images/img1.png'
import img2 from '../Assets/Images/img2.png'
import img3 from '../Assets/Images/img3.jpg'
import img4 from '../Assets/Images/img4.png'
import img5 from '../Assets/Images/img5.png'
import img6 from '../Assets/Images/img6.png'
export default function Imagesshow() {
  return (
    <>
    <div className='w-screen md:h-screen h-[30vh]' style={{
        backgroundImage: 'url(' + img1 + ')',
        backgroundSize: 'cover',
        backgroundAttachment : 'fixed',
        backgroundPosition: 'center',
    }}></div>
    <div className='w-screen md:h-screen h-[30vh]' style={{
        backgroundImage: 'url(' + img2 + ')',
        backgroundSize: 'cover',
        backgroundAttachment : 'fixed',
        backgroundPosition: 'center',
    }}></div>
    <div className='w-screen md:h-screen h-[30vh]' style={{
        backgroundImage: 'url(' + img3 + ')',
        backgroundSize: 'cover',
        backgroundAttachment : 'fixed',
        backgroundPosition: 'center',
    }}></div>
    <div className='w-screen md:h-screen h-[30vh]' style={{
        backgroundImage: 'url(' + img4 + ')',
        backgroundSize: 'cover',
        backgroundAttachment : 'fixed',
        backgroundPosition: 'center',
    }}></div>
    <div className='w-screen md:h-screen h-[30vh]' style={{
        backgroundImage: 'url(' + img5 + ')',
        backgroundSize: 'cover',
        backgroundAttachment : 'fixed',
        backgroundPosition: 'center',
    }}></div>
    <div className='w-screen md:h-screen h-[30vh]' style={{
        backgroundImage: 'url(' + img6 + ')',
        backgroundSize: 'cover',
        backgroundAttachment : 'fixed',
        backgroundPosition: 'center',
    }}></div>
    </>
  )
}
