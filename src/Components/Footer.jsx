import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
  return (
    <div className='w-full bg-black text-gray-400 p-5 flex justify-between'>
        <div>&copy; AMULURU SONAKSHI</div>
        <div className='flex items-center md:text-2xl text-xl md:gap-10 gap-5'>
            <a href=""><FaInstagram/></a>
            <a href=""><FaFacebook/></a>
            <a href=""><FaLinkedin/></a>
            <a href=""><FaTwitter/></a>
        </div>
    </div>
  )
}
