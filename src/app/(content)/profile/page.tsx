'use server'
import { auth } from "@/auth";
import ProfileComponent from "@/components/profile/ProfileComponent";
import { ProfileService } from "@/services/ProfileService";
import { IProfile } from "@/types/profile";
import { getProfile } from "../../../../actions/profile";





export default async function Profile() {

    const data: IProfile = await getProfile()
    return <ProfileComponent profile={data} />;
}