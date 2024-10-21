import { IProfile } from "@/types/profile";
import ExclamationInfo from "../ui/info/ExclamationInfo";
import Logout from "../ui/logout/Logout";
import Ttag from "../ui/title/Ttag";
import AvatarWIthName from "./AvatarWIthName";
import InfoCardProfile from "./InfoCardProfile";
import ProfileForm from "./ProfileForm";


interface IProfileComponent {
    profile: IProfile
}



export default function ProfileComponent({ profile }: IProfileComponent) {
    return (
        <div className="lg:flex lg:flex-col pb-[44px] lg:pb-[44px] md:pb-[54px] lg:px-[40px]">
            <div>
                <Ttag tag="h2">Profile Settings</Ttag>
            </div>

            <div className="flex flex-col items-center pt-16 mx-auto md:pt-16 lg:flex-row lg:items-start lg:justify-center">
                {/* top container */}
                <div className="flex flex-col gap-10 md:gap-8 max-w-[440px] lg:order-last lg:pl-[50px]">
                    <div>
                        <AvatarWIthName avatarName={profile.avatarPath} />
                    </div>
                    <div>
                        <InfoCardProfile />
                    </div>
                    <div>
                        <ExclamationInfo text="We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals." />
                    </div>
                    <div className="ml-auto">
                        <Logout fill="#E6533C" />
                    </div>
                </div>

                <div
                    className="sm:hidden md:hidden lg:block h-[568px] w-[1px] self-stretch  bg-whiteGray-20 ">

                </div>
                {/* bottom container */}
                <div className="lg:order-first lg:pr-[64px] ">
                    <ProfileForm name={profile.name} email={profile.email} height={profile.height} currentWeight={profile.currentWeight} desiredWeight={profile.desiredWeight} birthday={profile.birthday} blood={profile.blood} sex={profile.sex} levelActivity={profile.levelActivity} avatarPath={profile.avatarPath} />
                </div>
            </div>
        </div>
    )
}
