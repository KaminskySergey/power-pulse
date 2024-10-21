'use client'

import { doLogout } from "@/app/actions/logout"
import LogoutIcon from "@/components/svg/LogoutIcon"

interface ILogout {
    fill?: string
    className?: string
}

export default function Logout({fill, className}: ILogout) {

    const handleLogout = async () => {
        try {
            const response = await doLogout()
        } catch (error) {
            
        }
    }

    return <div onClick={handleLogout} className={`flex justify-center items-center gap-[8px] cursor-pointer ${className}`}>
        <p className="text-[14px] font-normal leading-5	text-white">Logout</p>
        <LogoutIcon fill={fill}/>
    </div>
}
