import RunManIcon from "../svg/RunManIcon";



export default function CardInfoCalHome() {
    return <div className="flex flex-col justify-center absolute bottom-[40px] right-[20px] lg:right-[32px] lg:bottom-[170px]  w-[119px] h-[76px] md:w-[180px] md:h-[110px] bg-orangeWhite  pl-[18px] md:pl-[28px]  rounded-xl  gap-[4px] md:gap-[8px]">
    <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full bg-beige flex justify-center items-center">
        <RunManIcon />
    </div>
    <div className="flex items-end gap-[8px]">
          <p className="text-[24px] md:text-[48px] text-whiteDark font-bold leading-none">500</p> <span className="text-whiteGray-65 text-[12px] md:text-[16px] font-bold leading-none">cal</span>
    </div>
</div> 
}
