'use server'
import ProfileComponent from "@/components/profile/ProfileComponent";
import { IProfile } from "@/types/profile";
import { getProfile } from "../../../../actions/profile";





export default async function Profile() {

    const data: IProfile = await getProfile()
    return <ProfileComponent profile={data} />;
}