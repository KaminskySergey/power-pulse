import CardInfoCalHome from "@/components/home/CardInfoCalHome";
import CardInfoVideosHome from "@/components/home/CardInfoVideosHome";
import { getImageProps } from "next/image";
import { ReactNode } from "react";
import LogoHeader from "../header/LogoHeader";

interface ILayoutBasic {
    children: ReactNode;
}

export default function LayoutBasic({ children }: ILayoutBasic) {
    const common = { alt: 'Background', sizes: '100vw' }
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        ...common,
        width: 682,
        height: 800,
        quality: 100,
        src: '/public/bg/people-training-gym-desktop.png',
    })
    const {
        props: { srcSet: tablet },
    } = getImageProps({
        ...common,
        width: 440,
        height: 894,
        quality: 100,
        src: '/public/bg/people-training-gym-tablet.png',
    })
    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({
        ...common,
        width: 300,
        height: 572,
        quality: 100,
        src: '/public/bg/people-training-gym.png',
    })
    return (
        <div className="flex flex-col gap-[90px] md:gap-[140px] lg:gap-[150px] py-[24px] px-[24px]  pb-0 md:px-[32px] md:pt-[32px] max-w-[1536px]/public bg-black h-screen  mx-auto relative">
            {/* <HomeComponent /> */}
            <div className="flex justify-start z-[100]">
                <LogoHeader />
            </div>
            {children}
            <div className="absolute w-[300px] md:w-[440px] lg:w-[682px] h-[572px]  md:h-[894px] lg:h-[100%] bottom-0 right-0">
                <picture className="relative">
                    <source media="(min-width: 1280px)" srcSet={desktop} />
                    <source media="(min-width: 768px)" srcSet={tablet} />
                    <source media="(min-width: 320px)" srcSet={mobile} />
                    <img {...rest} style={{ width: '100%', height: 'auto' }} />
                    <CardInfoVideosHome />
                    <CardInfoCalHome />
                </picture>
                {/* <Image src={'/public/bg/people-training-gym.png'} fill alt=/public"bg" /> */}
            </div>
        </div>);
}
