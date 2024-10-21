import PlayIcon from "../svg/PlayIcon";


export default function CardInfoVideosHome() {
    return <div className="w-[146px] md:w-[206px] md:h-[96px] h-[66px] absolute right-[108px] md:left-0 bottom-[188px] md:bottom-[214px] lg:bottom-[320px]  bg-darkGray rounded-xl py-[14px] pl-[18px] md:py-[24px] md:pl-[28px] flex items-center gap-[8px] md:gap-[12px]">
            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-customGray-30 flex justify-center items-center">
                <PlayIcon />
            </div>
            <div>
                <p className="text-[16px] md:text-[24px] text-whiteDark font-bold">350+</p>
                <p className="font-normal	text-[12px] md:text-[16px] text-whiteGray-65">Video tutorial</p>
            </div>
        </div>
        
}
