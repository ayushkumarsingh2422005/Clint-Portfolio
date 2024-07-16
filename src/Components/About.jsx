import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import profile from '../Assets/profile.png';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default function About() {
    useGSAP(() => {
        gsap.to('.about_image_laptop', {
            // bottom:"0",
            top: '90%',
            ease:'linear',
            scrollTrigger: {
                trigger: ".about_image_container",
                end: '190% top',
                start: '50% bottom',
                // markers: true,
                scrub: true,
                // pin: true
            }
        });

        gsap.from('.about_text span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".about_container",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true,
            }
        });

        gsap.to('.about_text_inner', {
            duration: 2,
            text: `I am currently pursuing 10th semester B.arch at Manipal school of architecture and planning, dedicated with keen interest in architecture, interiors, arts and design. I am looking forward to gain work experience and improve my design and technical knowledge. My main goal is to seek a position where my skills can be utilized and improved.`,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.about_text_inner',
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: "restart none none none",
                // scrub: true,
            },
        });
    }, [])
    return (
        <div className='container mx-auto p-4 relative about_container flex h-full md:gap-20'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 about_text w-full'>
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
                <br /><br />
                <div className='md:text-2xl text-xl md:w-[60%] w-full text-justify font-medium text-gray-400 about_text_inner'>
                    f
                </div>
            </div>
            <div className='h-full md:pr-[10vw] flex items-center'>
                <div className='md:w-[300px] w-[100px] border-4 h-[90%] rounded-full relative p-2 overflow-hidden about_image_container'>
                    <div className='w-full aspect-square rounded-full bg-slate-200 about_image_laptop absolute top-0 left-0' style={{
                        backgroundImage: 'url("' + profile + '")',
                        backgroundSize: 'cover'
                    }}></div>
                </div>
            </div>
        </div>
    )
}
