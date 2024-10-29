'use client'
import React from "react"
import LogoutIcon from "@/components/svg/LogoutIcon"
import { signOut } from "next-auth/react"

interface ILogout {
    fill?: string
    className?: string
}

export default function Logout({fill, className}: ILogout) {



    return <div onClick={() => signOut()} className={`flex justify-center items-center gap-[8px] cursor-pointer ${className}`}>
        <p className="text-[14px] font-normal leading-5	text-white">Logout</p>
        <LogoutIcon fill={fill}/>
    </div>
}
