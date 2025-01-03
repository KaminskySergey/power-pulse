import TitleHomePage from "../ui/title/TitleHomePage";
import ButtonAuth from "./ButtonAuth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";


export default async function HomeComponent() {
    const session = await getServerSession(authOptions)
    if(session) {
        redirect('/profile')
    }
    return <div className="relative z-50">
    
    <div className="flex flex-col gap-[40px] md:gap-[64px]">
        <div className="sm:w-[335px] md:w-[598px]">
            <TitleHomePage />
        </div>
        <div>
            <ButtonAuth />
        </div>
    </div>
</div>
}
