import Logo from "@/components/svg/LogoIcon";
import LogoText from "@/components/svg/LogoText";


export default function LogoHeader() {
    return <div className="flex items-center justify-center gap-[8px]">
        <div>
            <Logo />
        </div>
        <LogoText />
    </div>
}
