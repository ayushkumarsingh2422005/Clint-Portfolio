import React, { useState } from 'react'

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState([0, 0]);
    addEventListener("mousemove", (e) => {
        e.preventDefault();
        setMousePosition([e.x, e.y]);
        console.log([e.x, e.y])
    });
    return (
        <div className={`fixed top-[${mousePosition[1]}px] left-[${mousePosition[0]}px] h-4 w-4 bg-black z-50`}>
            dbhjcfbcjhvsdfhgjhsdfhgdshg
        </div>
    )
}
