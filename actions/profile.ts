'use server'
import { authOptions } from "@/auth"
import { BASIC_URL } from "@/app/const/basic-server-url";
import { IAvatar, IProfileUpdate } from "@/types/profile";
import { getServerSession } from "next-auth";

export async function getProfile() {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/profile`, {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
     }
    })
    const res = await response.json()
    return res
} 

export async function getInfoCardCurrenDay(date: string) {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/calculate/current-day?date=${date}`, {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
     }
    })
    const res = await response.json()
    return res
} 

export async function getAllCalculate() {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/calculate/bmr`, {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
     }
    })
    const res = await response.json()
    return res
} 

export async function getProfileAvatar() {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/profile/avatar`, {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
     }
    })
    const res = await response.json()
    return res
} 

export async function updateProfile(data: IProfileUpdate) {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/profile`, {
     method: 'PUT',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
    },
    body: JSON.stringify(data),
    })
    const status = response.status;
    const res = await response.json()
    return {status ,res}
} 

export async function updateAvatar(data: IAvatar) {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/profile/avatar`, {
     method: 'PUT',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
    },
    body: JSON.stringify({ avatarPath: data }),
    })
    const res = await response.json()
    return res
} 
