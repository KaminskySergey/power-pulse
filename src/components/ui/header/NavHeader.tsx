'use client'
import { useEffect, useState } from 'react'
import AvatarIcon from "@/components/svg/AvatarIcon";
import MenuIcon from "@/components/svg/MenuIcon";
import SettingsIcon from "@/components/svg/SettingsIcon";
import CrossIcon from '@/components/svg/CrossIcon';
import MobileNav from './MobileNav';
import LaptopNav from './LaptopNav';
import Logout from '../logout/Logout';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getProfileAvatar } from '../../../../actions/profile';



export default function NavHeader() {
    const session = useSession()
    if (session.status !== "authenticated") return
    const [currentAvatar, setCurrentAvatar] = useState(session.data.user.avatarPath)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
        if (session.status === 'authenticated') {
            const fetchProfileAvatar = async () => {
                
                try {
                    if (currentAvatar === null) {
                        const res = await getProfileAvatar();
                        console.log(res, 'nnnnn')
                        if (!res.avatarPath) return
                        setCurrentAvatar(res.avatarPath);
                    }

                } catch (error) {
                    console.error('Failed to fetch profile avatar:', error);
                }
            };

            fetchProfileAvatar();
        }
    }, []);

    const handleToggle = () => {
        setIsOpenMenu(pS => !pS)
    }
    return <>
        <div className='sm:hidden md:hidden lg:block'>
            <LaptopNav />

        </div>
        <div className=''>
            <ul className="flex items-center justify-center gap-[14px]">
                <li className=''>
                    <Link href={'/profile'}>

                         <div className={`p-1 ${pathname === '/profile' ? 'bg-orange rounded-lg' : ''}`}><SettingsIcon  width="24px" height="24px" /></div> 
                    </Link>

                </li>
                <li className='flex items-center'>
                    <button type='button'>
                        <div className={`flex items-center justify-center border-solid rounded-full  border border-orange w-[37px] h-[37px] overflow-hidden bg-black1`}>
                            {
                                currentAvatar ? <Image src={`/uploads/${currentAvatar}`} alt="avatar" width={37} height={37} className=" bg-black1 object-cover" /> : <AvatarIcon className="" width="20px" height="20px" />
                            }

                        </div>
                    </button>

                </li>
                <li className='z-50'>
                    {isOpenMenu ?
                        <button type='button' onClick={handleToggle}>
                            <CrossIcon className=''/>
                        </button> : (
                            <>
                                <button type='button'>

                                    <Logout fill='#E6533C' className="sm:hidden md:hidden lg:flex" />
                                </button>
                                <button type='button' onClick={handleToggle}>

                                    <MenuIcon className="sm:block md:block lg:hidden" width="28px" height="28px" />
                                </button>
                            </>
                        )

                    }


                </li>
            </ul>
        </div>
        {isOpenMenu && <MobileNav handleToggle={handleToggle}/>}

    </>
}
