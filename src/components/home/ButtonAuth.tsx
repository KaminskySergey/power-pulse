import Button from "../ui/button/Button";
import Link from "next/link"



export default function ButtonAuth() {
    return <ul className="flex gap-[14px]">
        <li>
            <Link href={'/auth/register'}>
                <Button className="text-[16px] md:text-[20px] w-[130px] h-[42px] md:w-[190px] md:h-[56px]  p-[12px] sm:leading-4	" orangeProps>Sign Up</Button>
            </Link>
        </li>
        <li>
            <Link href={'/auth/login'}>
                <Button className="border-solid border-2 border-[#EFEDE830] hover:border-whiteDark focus:border-whiteDark text-[16px] md:text-[20px] w-[130px] h-[42px] p-[12px] md:w-[182px] md:h-[56px] sm:leading-4	" >Sign In</Button>
            </Link>
        </li>
    </ul>

}
