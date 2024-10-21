'use client'
import { useState } from "react";

interface IShoppingCartIcon {
    className?: string
    onClick?: () => void
}
const transitionStyle = {
    transition: 'stroke 0.3s ease' 
  };

export default function ShoppingCartIcon({ className, onClick }: IShoppingCartIcon) {
    const [hovered, setHovered] = useState(false);
    return <svg onClick={onClick} style={transitionStyle} className={`cursor-pointer ${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <path d="M7.5 2.5H12.5M8.33333 8.75V12.9167M11.6667 8.75V12.9167" stroke={hovered ? "#D80027" : "#EF8964"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5"stroke={hovered ? "#D80027" : "#EF8964"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

}